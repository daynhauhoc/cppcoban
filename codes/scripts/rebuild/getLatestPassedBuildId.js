/*
 * Get latest passed build id from Travis GET /repos/{repo slug}/builds
 * @param {Object} response
 * @param {string} branch Get passed build from which branch
 * @return {number | null} buildId
 */
module.exports = function getLatestPassedBuildId(response, branch) {
  branch = branch || "master"
  const builds = response.builds
  const commits = response.commits

  // Get all commit ids of the given branch
  const commitIdsOfBranch = commits
    .filter((commit) => commit.branch === branch)
    .map((commit) => commit.id)

  // Get the first `push` build that `passed` and in commit id array
  const passedBuilds = builds
    .filter((build) => (
      build.event_type === "push" &&
      build.state === "passed" &&
      commitIdsOfBranch.indexOf(build.commit_id) > -1
    ))

  if (passedBuilds.length > 0) {
    return passedBuilds.shift().id
  }

  return null
}
