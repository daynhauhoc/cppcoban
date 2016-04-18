import test from "ava"
import response from "./stubs/builds.json"
import response2 from "./stubs/builds2.json"
import fn from "../getLatestPassedBuildId"

test("get latest passed build id", (t) => {
  t.is(fn(response), 123679507)
  t.is(fn(response2), 123691240)
})
