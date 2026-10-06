const test = require("node:test")
const assert = require("node:assert/strict")
const response = require("./stubs/builds.json")
const response2 = require("./stubs/builds2.json")
const fn = require("../getLatestPassedBuildId")

test("get latest passed build id", () => {
  assert.equal(fn(response), 123679507)
  assert.equal(fn(response2), 123691240)
})
