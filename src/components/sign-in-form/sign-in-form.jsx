import React, { useContext, useState } from "react"
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase-utils"
import { FormInput } from "../form-input/form-input"
import "./sign-in-form.styles.scss"
import { UserContext } from "../../contexts/user.context"

const defaultFormFields = {
  email: "",
  password: "",
}

export const SignInForm = () => {
  //let navigate = useNavigate()
  const { setCurrentUser } = useContext(UserContext)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password")
          break
        default:
          alert("An unexpected error occurred")
          break
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    setCurrentUser(user)
    await createUserDocumentFromAuth(user)
    console.log(user)
  }

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={signIn}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <button type="submit">SIGN IN</button>
          <button
            type="button"
            className="google-sign-in"
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  )
}
