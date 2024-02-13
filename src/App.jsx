import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import { SignInPage } from "./components/SignInPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App
