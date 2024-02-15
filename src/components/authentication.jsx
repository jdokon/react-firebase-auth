import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"

export const Authentication = () => {
  return (
    <div>
      <h1>Sign In / Register</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
