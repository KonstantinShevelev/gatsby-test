import * as React from "react"
import { graphql } from "gatsby"
import Post from "../components/post"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import FeaturedPostsList from "../components/featured-posts"

export const query = graphql`
  query {
    allDatoCmsPost(sort: { order: DESC, fields: id }) {
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
    datoCmsIndex {
      title
      text
    }
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allDatoCmsPost.nodes
  return (
    <Layout>
      <section>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center relative flex justify-center flex-col">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Featured Posts
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <FeaturedPostsList />
              </dl>
            </div>
          </div>
          <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center relative flex justify-center flex-col">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {data.datoCmsIndex.title}
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {data.datoCmsIndex.text}
              </p>
              <Dropdown />
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {posts.map(post => {
                  return <Post key={post.id} {...post} />
                })}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
