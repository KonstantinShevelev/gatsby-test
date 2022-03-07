const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/posts/post.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(
    `
      {
        allDatoCmsPost(sort: { order: ASC, fields: id }) {
          edges {
            node {
              title
              slug
            }
          }
        }
        allDatoCmsTag {
          nodes {
            title
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

  const posts = result.data.allDatoCmsPost.edges
  result.data.allDatoCmsPost.edges.forEach(({ node }, index) => {
    const path = "posts/" + node.slug
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  result.data.allDatoCmsTag.nodes.forEach(tag => {
    createPage({
      path: `/tags/${tag.title}`,
      component: tagsTemplate,
      context: {
        tag: tag.title,
      },
    })
  })
}
