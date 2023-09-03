import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"
import SocketContext from "./context/SocketContext"
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0])
function App() {
  let { user } = useSelector((store) => {
    return store.user
  })
  const token = user.token
  console.log("data", user)

  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
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
      </SocketContext.Provider>
    </div>
  )
}
export default App
