import { useContext } from "react"
import { SignInForm } from "../sign-in-form/sign-in-form"
import { SignUpForm } from "../sign-up-form/sign-up-form"
import "./authentication.styles.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase-utils"

export const Authentication = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    const resp = await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>

      {currentUser ? (
        <button onClick={signOutHandler}>SIGN OUT</button>
      ) : (
        <h1>USER NOT LOGGED IN</h1>
      )}
    </>
  )
}
