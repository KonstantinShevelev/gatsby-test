const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allDatoCmsPost {
          edges {
            node {
              title
              slug
              id
              body
              date
            }
          }
        }
      }
    `
  )

  paginate({
    createPage,
    items: result.data.allDatoCmsPost.edges,
    itemsPerPage: 2,
    pathPrefix: "/blog",
    component: path.resolve(`src/templates/blog.js`),
  })

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPostTemplate = path.resolve(`src/pages/posts/post.js`)
  result.data.allDatoCmsPost.edges.forEach(({ node }) => {
    const path = "posts/" + node.slug
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        slug: node.slug,
      },
    })
  })
}
