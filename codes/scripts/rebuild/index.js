const got = require("got")
const joinUri = require("join-uri")
const getLatestPassedBuildId = require("./getLatestPassedBuildId")

const apiHost = "https://api.travis-ci.org/"
const websiteRepoSlug = "thangngoc89/dnh-cpp"
const allBuilds = (slug) => `/repos/${ slug }/builds`
const restartBuild = (buildId) => `/builds/${ buildId }/restart`

const token = process.env.TRAVIS_TOKEN
if (!token) {
  throw new Error("No TRAVIS_TOKEN an env vars")
}

const headers = {
  "accept": "application/vnd.travis-ci.2+json",
  "user-agent": "Travis/1.8.2",
  "Authorization": `token "${ token }"`,
}

const getAllBuilds = joinUri(apiHost, allBuilds(websiteRepoSlug))
got(getAllBuilds, {
  headers,
  json: true,
  query: {
    event_type: "push",
  },
})
  .then((res) => getLatestPassedBuildId(res.body))
  .then((id) => {
    if (!id) {
      process.nextTick(() => { throw new Error("Can't handle build not on the first page yet") })
    }
    const url = joinUri(apiHost, restartBuild(id))
    return got.post(url, { headers, json: true })
  })
  .then((res) => {
    if (!res.body.result) {
      console.log(res.body)
      process.nextTick(() => {
        throw new Error("Restart build unsucceed")
      })
    }
    else {
      console.log("Restart build succeed")
    }
  })
  .catch((err) => {
    process.nextTick(() => { throw err })
  })
