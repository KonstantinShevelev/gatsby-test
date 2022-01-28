import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Pager from "../components/pager"
import Layout from "../components/layout"

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <section>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {data.datoCmsBlog.title}
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {data.datoCmsBlog.text}
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {data.allDatoCmsPost.edges.map(post => {
                  return (
                    <Link
                      to={`/posts/${post.node.slug}`}
                      className="relative block"
                      key={post.node.id}
                    >
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                          {post.node.title}
                        </p>
                        <time className="ml-16">{post.node.date}</time>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {post.node.body}
                      </dd>
                    </Link>
                  )
                })}
                <Pager pageContext={pageContext} />
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allDatoCmsPost(
      sort: { order: DESC, fields: id }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          body
          date
        }
      }
    }
    datoCmsBlog {
      title
      text
    }
  }
`

export default Blog
