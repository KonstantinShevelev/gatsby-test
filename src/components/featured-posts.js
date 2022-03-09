import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedPost from "./featured-post"

const FeaturedPostsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPost {
        nodes {
          body
          tags {
            title
          }
          slug
          date
          title
          featured
          id
        }
      }
    }
  `)
  const nodes = data.allDatoCmsPost.nodes
  return (
    <div>
      {nodes.map(node => {
        if (node.featured) {
          return <FeaturedPost key={node.id} {...node} />
        } else {
          return null
        }
      })}
    </div>
  )
}

export default FeaturedPostsList
