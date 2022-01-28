import React from "react"

const PostBody = ({ content }) => {
  return (
    <div className="mx-auto">
      <div className="prose prose-lg prose-blue">
        <p className="py-6 font-sans">{content}</p>
      </div>
    </div>
  )
}
export default PostBody
