import * as React from "react"
import { graphql } from "gatsby"
import PostHeader from "../../components/post-header"
import PostBody from "../../components/post-body"
import Container from "../../components/post-container"
import { Link } from "gatsby"

export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsPost(id: { eq: $id }) {
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
        <Link className="text-sm md:text-base font-normal text-blue-700" to="/">
          Вернуться назад
        </Link>
        <PostHeader date={post.date} title={post.title} />
        <PostBody content={post.body} />
      </Container>
    </article>
  )
}
