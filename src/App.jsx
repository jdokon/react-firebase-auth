import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/home-page"
import { Authentication } from "./components/authentication"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Authentication />} />
      </Routes>
    </Router>
  )
}

export default App
