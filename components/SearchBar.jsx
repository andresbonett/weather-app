import { useState, useRef, useContext } from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios"
import GeoLocation from "./GeoLacation"

const searchGoogleAddress = async (address) => {
  const api_key = "AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw"
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`
  try {
    const { data } = await axios.get(API)
    const location = data.results[0].geometry.location
    return location
  } catch (error) {
    alert("location not found")
    const location = { lat: 10.39, lng: -75.48 }
    return location
  }
}

export default function SearchBar() {
  const [value, setValue] = useState("")
  const form = useRef(null)
  const { setLocation } = useContext(AppContext)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const address = formData.get("search")

    const location = await searchGoogleAddress(address)
    setLocation(location)
  }

  return (
    <>
      <form ref={form}>
        <input
          id="search"
          name="search"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
        <GeoLocation />
      </form>
      <style jsx>{`
        form {
          margin: 1em 0;
          color: #393939;
          font-size: 12px;
          padding: 5px;
        }
        input {
          color: #393939;
          font-size: 16px;
          padding: 5px;
        }
        button {
          margin-left: 0.5rem;
          height: 2.1rem;
        }
      `}</style>
    </>
  )
}
