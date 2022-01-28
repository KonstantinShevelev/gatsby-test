import * as React from "react"
import { graphql } from "gatsby"
import PostHeader from "../../components/post-header"
import PostBody from "../../components/post-body"
import Container from "../../components/post-container"
import { Link } from "gatsby"

export const query = graphql`
  query PostBySlug($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
      title
      body
      date
    }
  }
`

export default function Post({ data: { post } }) {
  return (
    <article>
      <Container>
        <Link
          className="text-sm md:text-base font-normal text-blue-700"
          to="/blog"
        >
          Перейти в блог
        </Link>
        <PostHeader date={post.date} title={post.title} />
        <PostBody content={post.body} />
      </Container>
    </article>
  )
}
