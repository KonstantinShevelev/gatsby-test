import React from "react"
import { Link } from "gatsby"
const Tags = ({ tags }) => {
  return (
    <React.Fragment>
      {tags.map(tag => {
        return (
          <Link
            className="mr-2 relative inline-flex items-center px-2 py-1 rounded border bg-indigo-50 border-indigo-500 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
            key={tag.title}
            to={`/tags/${tag.title}`}
          >
            <span>{tag.title}</span>
          </Link>
        )
      })}
    </React.Fragment>
  )
}

export default Tags
