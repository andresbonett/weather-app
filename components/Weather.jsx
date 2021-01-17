import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Weather() {
  const {
    data: {
      name,
      sys: { country },
    },
  } = useContext(AppContext)

  return (
    <>
      <div>
        <h1>
          {name}, {country}
        </h1>
        <div>{new Date().toDateString()}</div>
      </div>

      <style jsx>{`
        h1 {
          margin: 0;
          font-size: 2em;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}
