import React from "react"

export default function PostBody({ content }) {
  return (
    <div className="mx-auto">
      <div className="prose prose-lg prose-blue">
        <p className="py-6 font-sans">{content}</p>
      </div>
    </div>
  )
}
