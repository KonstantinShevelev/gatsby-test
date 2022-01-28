import React from "react"

const Container = ({ children }) => {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        {children}
      </div>
    </div>
  )
}

export default Container
