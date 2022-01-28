import React from "react"

const PostTitle = ({ children }) => {
  return (
    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
      {children}
    </h1>
  )
}

export default PostTitle
