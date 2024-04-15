import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase-utils"
import { setCurrentUser } from "./store/user/user.action"
import { useDispatch } from "react-redux"
import { Navigation } from "./routes/navigation/navigation"
import HomePage from "./routes/home/home-page"
import { SignInForm } from "./components/sign-in-form/sign-in-form"
import { SignUpForm } from "./components/sign-up-form/sign-up-form"
import { ForgotPassword } from "./components/forgot-password/forgot-password"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubsribe
  }, []) // ignore lint error because dispatch will not change.

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App
