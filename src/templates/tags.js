import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export const query = graphql`
  query ($tag: String) {
    allDatoCmsPost(filter: { tags: { elemMatch: { title: { eq: $tag } } } }) {
      nodes {
        id
        title
        slug
        body
        date
        tags {
          title
        }
      }
    }
    datoCmsTagsPage {
      text
    }
  }
`

const Tags = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allDatoCmsPost.nodes
  return (
    <div>
      <Layout>
        <section>
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  All posts by <span>"{tag}"</span> tag
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  {data.datoCmsTagsPage.text}
                </p>
              </div>
              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6">
                  {posts.map(post => {
                    return <Post key={post.id} {...post} />
                  })}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Tags
