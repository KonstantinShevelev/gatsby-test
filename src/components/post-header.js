import React from "react"
import PostTitle from "./post-title"
import Date from "./post-date"

const PostHeader = ({ title, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Date dateString={date} />
    </>
  )
}

export default PostHeader
