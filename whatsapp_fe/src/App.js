import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "./features/userSlice"
function App() {
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
