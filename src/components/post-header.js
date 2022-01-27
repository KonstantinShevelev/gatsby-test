import React from "react"
import PostTitle from "./post-title"
import Date from "./post-date"

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Date dateString={date} />
    </>
  )
}
