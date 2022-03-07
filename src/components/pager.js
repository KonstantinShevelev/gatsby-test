import * as React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext, totalCount }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="bg-white col-span-2 py-4 flex items-center justify-between border-t border-gray-200">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{pageContext.humanPageNumber} </span>
            to <span className="font-medium">{pageContext.numberOfPages} </span>
            of <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {previousPagePath && (
              <Link
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                to={previousPagePath}
              >
                Previous
              </Link>
            )}
            {Array.from({ length: pageContext.numberOfPages }).map(
              (item, i) => {
                const index = i + 1
                const link = index === 1 ? "/blog" : `/blog/${index}`
                return (
                  <React.Fragment key={i}>
                    {pageContext.humanPageNumber === index ? (
                      <span className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        {index}
                      </span>
                    ) : (
                      <Link
                        to={link}
                        aria-current="page"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                      >
                        {index}
                      </Link>
                    )}
                  </React.Fragment>
                )
              }
            )}
            {nextPagePath && (
              <Link
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                to={nextPagePath}
              >
                Next
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pager
