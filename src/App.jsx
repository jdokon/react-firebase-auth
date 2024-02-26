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
import { Navigation } from "./routes/navigation/navigation"

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
      <Route path="/" element={<Navigation />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default App
