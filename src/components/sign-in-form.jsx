import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase-utils"

export const SignInForm = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async (e) => {
    // e.preventDefault()
    // navigate("/home")
  }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  const signInWithGoogle = async () => {}

  return (
    <div>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>

      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  )
}
