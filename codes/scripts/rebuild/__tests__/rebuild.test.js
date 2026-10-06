const test = require("node:test")
const assert = require("node:assert/strict")
const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const { createRequire } = require("node:module")
const got = require("got")

async function serve(t, handler) {
  const server = http.createServer(handler)
  await new Promise((resolve, reject) => {
    server.once("error", reject)
    server.listen(0, "127.0.0.1", resolve)
  })
  t.after(() => new Promise((resolve) => server.close(resolve)))
  return `http://127.0.0.1:${server.address().port}`
}

function runRebuild(client) {
  return new Promise((resolve, reject) => {
    const script = path.join(__dirname, "../index.js")
    const scriptRequire = createRequire(script)
    vm.runInNewContext(fs.readFileSync(script, "utf8"), {
      require: (name) => name === "got" ? client : scriptRequire(name),
      process: {
        env: { TRAVIS_TOKEN: "local-test-token" },
        nextTick: (callback) => {
          try { callback() } catch (error) { reject(error) }
        },
      },
      console: { log: (message) => {
        if (message === "Restart build succeed") resolve(message)
      } },
    })
  })
}

test("rebuild reads JSON builds and sends the restart request", { timeout: 5000 }, async (t) => {
  const requests = []
  const origin = await serve(t, (req, res) => {
    requests.push({ method: req.method, url: req.url, headers: req.headers })
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(req.method === "GET" ? {
      builds: [{ id: 123, commit_id: 456, event_type: "push", state: "passed" }],
      commits: [{ id: 456, branch: "master" }],
    } : { result: true }))
  })
  const message = await runRebuild(routeTo(origin))

  assert.equal(message, "Restart build succeed")
  assert.deepEqual(requests.map(({ method, url }) => ({ method, url })), [
    { method: "GET", url: "/repos/thangngoc89/dnh-cpp/builds?event_type=push" },
    { method: "POST", url: "/builds/123/restart" },
  ])
  for (const request of requests) {
    assert.equal(request.headers.authorization, 'token "local-test-token"')
    assert.equal(request.headers.accept, "application/vnd.travis-ci.2+json")
  }
})

test("Got rejects redirects to UNIX sockets", { timeout: 5000 }, async (t) => {
  const origin = await serve(t, (req, res) => {
    res.writeHead(302, { location: "http://unix:/tmp/cppcoban-test.sock:/" })
    res.end()
  })
  await assert.rejects(got(origin, { retry: 0 }), /Cannot redirect to UNIX socket/)
})

function routeTo(origin) {
  return got.extend({
    hooks: {
      beforeRequest: [(options) => {
        assert.ok(["https://api.travis-ci.org", origin].includes(options.url.origin))
        options.url = new URL(options.url.pathname + options.url.search, origin)
      }],
    },
  })
}

function sendBuilds(res) {
  res.setHeader("content-type", "application/json")
  res.end(JSON.stringify({
    builds: [{ id: 123, commit_id: 456, event_type: "push", state: "passed" }],
    commits: [{ id: 456, branch: "master" }],
  }))
}

for (const status of [301, 302, 303, 307, 308]) {
  test(`rebuild rejects POST redirect ${status} without following it`, { timeout: 10000 }, async (t) => {
    const requests = []
    const origin = await serve(t, (req, res) => {
      requests.push(req.method + " " + req.url)
      if (req.method === "GET") return sendBuilds(res)
      res.writeHead(status, { location: "/redirected", "content-type": "application/json" })
      res.end('{"result":true}')
    })
    await assert.rejects(runRebuild(routeTo(origin)), /Restart build unsucceed/)
    assert.deepEqual(requests, [
      "GET /repos/thangngoc89/dnh-cpp/builds?event_type=push",
      "POST /builds/123/restart",
    ])
  })
}

for (const failure of ["HTTP 503", "connection reset"]) {
  test(`rebuild does not retry POST after ${failure}`, { timeout: 10000 }, async (t) => {
    let posts = 0
    const origin = await serve(t, (req, res) => {
      if (req.method === "GET") return sendBuilds(res)
      posts++
      if (failure === "connection reset") return req.socket.destroy()
      res.writeHead(503, { "content-type": "application/json" })
      res.end('{"result":false}')
    })
    await assert.rejects(runRebuild(routeTo(origin)), failure === "HTTP 503"
      ? (error) => error.response.statusCode === 503
      : (error) => error.code === "ECONNRESET")
    assert.equal(posts, 1)
  })
}

for (const recover of [true, false]) {
  test(`rebuild retries GET at most twice, recovery=${recover}`, { timeout: 10000 }, async (t) => {
    let gets = 0
    let posts = 0
    const origin = await serve(t, (req, res) => {
      if (req.method === "GET") {
        gets++
        if (recover && gets === 3) return sendBuilds(res)
        res.writeHead(500, { "content-type": "application/json" })
        return res.end('{}')
      }
      posts++
      res.setHeader("content-type", "application/json")
      res.end('{"result":true}')
    })
    const result = runRebuild(routeTo(origin))
    if (recover) assert.equal(await result, "Restart build succeed")
    else await assert.rejects(result, (error) => error.response.statusCode === 500)
    assert.equal(gets, 3)
    assert.equal(posts, recover ? 1 : 0)
  })
}
