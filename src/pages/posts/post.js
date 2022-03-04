import * as React from "react"
import { graphql } from "gatsby"
import PostHeader from "../../components/post-header"
import PostBody from "../../components/post-body"
import Container from "../../components/post-container"
import { Link } from "gatsby"

export const query = graphql`
  query MyQuery($slug: String) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      body
      date
    }
  }
`
const Post = ({ data, pageContext }) => {
  const prev = pageContext.prev
    ? {
        url: `/posts/${pageContext.prev.slug}`,
        title: pageContext.prev.title,
      }
    : null
  const next = pageContext.next
    ? {
        url: `/posts/${pageContext.next.slug}`,
        title: pageContext.next.title,
      }
    : null
  return (
    <article>
      <Container>
        <Link
          className="text-sm md:text-base font-normal text-blue-700"
          to="/blog"
        >
          Перейти в блог
        </Link>
        <PostHeader
          date={data.datoCmsPost.date}
          title={data.datoCmsPost.title}
        />
        <PostBody content={data.datoCmsPost.body} />
        <div className="bg-white col-span-2 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <nav
              className="w-full justify-between relative z-0 inline-flex rounded-md"
              aria-label="Pagination"
            >
              {prev && (
                <Link
                  to={prev.url}
                  className="relative inline-flex items-center px-2 py-2 rounded border bg-indigo-50 border-indigo-500 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  {prev.title}
                </Link>
              )}
              {next && (
                <Link
                  to={next.url}
                  className="relative inline-flex items-center px-2 py-2 rounded border bg-indigo-50 border-indigo-500 text-sm font-medium text-indigo-600 hover:bg-indigo-50 ml-auto"
                >
                  {next.title}
                </Link>
              )}
            </nav>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Post
