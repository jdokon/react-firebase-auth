import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase-utils"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const SignUpForm = () => {
  let navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
    }

    //navigate("/home")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="displayName"
        placeholder="Username"
        required
        value={displayName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  )
}
