import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "./features/userSlice"
function App() {
  let { user } = useSelector((store) => {
    return store.user
  })
  const { token } = user
  console.log("data", user)

  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  )
}
export default App
