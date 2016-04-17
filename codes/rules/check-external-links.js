const visit = require("unist-util-visit")

const absLink = /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i

function checkExternalLinks(ast, file, preferred, done) {
  visit(ast, "image", (node) => {
    const url = node.url

    if (absLink.test(url)) {

    }
    // file.warn(
    //   "Local images link must be ended with",
    //   node
    // )
  })

  done()
}

module.exports = {
  "check-external-links": checkExternalLinks,
}
