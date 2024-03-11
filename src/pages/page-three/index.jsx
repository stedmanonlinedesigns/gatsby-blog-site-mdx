import React, { useState } from "react"
import axios from "axios"

export default function PageThree() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "/.netlify/functions/submitForm",
        formData
      )
      console.log(response.data)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div>
      <h1>Test Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
