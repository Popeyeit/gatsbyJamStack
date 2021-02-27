const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query GetBoxers {
      boxers: allContentfulBoxer {
        nodes {
          slug
        }
      }
    }
  `)
  res.data.boxers.nodes.forEach(boxer => {
    createPage({
      path: `/boxers/${boxer.slug}`,
      component: path.resolve(`src/templates/boxer-template.js`),
      context: { slug: boxer.slug },
    })
  })
}
