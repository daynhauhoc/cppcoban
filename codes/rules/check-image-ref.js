const visit = require("unist-util-visit")
const absLink = require("./abs-link")

const path = require("path")
const join = path.join
const fs = require("pify")(require("fs"))

function checkImageRef(ast, file, preferred, done) {
  const promises = []

  visit(ast, "image", (node) => {
    const url = node.url
    // Get full folder path
    const folderPath = join(
      __dirname,
      "../../",
      file.filePath().split("/").slice(0, -1).join("/"),
      "/"
    )

    if (!absLink.test(url)) {
      const fileName = url.split("/").pop()
      const fullPath = join(folderPath, fileName)
      promises.push(
        fs
        .access(fullPath, fs.R_OK)
        .catch(() => {
          process.nextTick(() => {
            file.warn(`Image doesn't exits "${ url }"`, node)
          })
        })
      )
    }
  })

  Promise.all(promises)
  .then(() => {
    done()
  })
  .catch((err) => {
    process.nextTick(() => {
      throw err
    })
  })
}

module.exports = {
  "check-image-ref": checkImageRef,
}
