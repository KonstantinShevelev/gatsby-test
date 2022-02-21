import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
              <img
                src="https://flipstore.withun.link/identity/Group%201.svg"
                alt=""
              />
            </div>
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">
                Error
                <br />
                404
              </h1>
              <p>Page not found!</p>
            </div>
            <div className="mb-20 md:mb-0">
              <Link
                to={`/`}
                className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600"
              >
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
