import { useContext } from "react"
import { SignInForm } from "../sign-in-form/sign-in-form"
import { SignUpForm } from "../sign-up-form/sign-up-form"
import "./authentication.styles.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase-utils"
import { useSelector } from "react-redux"

export const Authentication = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  )
}
