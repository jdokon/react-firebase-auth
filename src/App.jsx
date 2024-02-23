import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/home-page"
import { Authentication } from "./components/authentication/authentication"
import { useEffect } from "react"
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase-utils"
import { setCurrentUser } from "./store/user/user.action"
import { useDispatch } from "react-redux"

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
      <Route path="/auth" element={<Authentication />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Authentication />} />
    </Routes>
  )
}

export default App
