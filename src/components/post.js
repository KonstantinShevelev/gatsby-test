import React from "react"
import { Link } from "gatsby"
import Tags from "./tags"
const Post = ({ tags, title, slug, body, date }) => {
  return (
    <div>
      <Link to={`/posts/${slug}`} className="relative block">
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
            {title}
          </p>
          <time className="ml-16">{date}</time>
        </dt>
        <dd className="mt-2 ml-16 text-base text-gray-500">{body}</dd>
      </Link>
      <div className="mt-4 ml-16">
        {tags.length !== 0 && <Tags tags={tags} />}
      </div>
    </div>
  )
}

export default Post
