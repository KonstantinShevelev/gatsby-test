import React from "react"
import { parseISO, format } from "date-fns"

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time
      className="text-sm md:text-base font-normal text-gray-600"
      dateTime={dateString}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  )
}

export default Date
