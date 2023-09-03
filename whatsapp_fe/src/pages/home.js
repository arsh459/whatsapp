import { useEffect } from "react"
import { Sidebar } from "../components/sidebar"
import { useDispatch, useSelector } from "react-redux"
import {
  getConversations,
  updateMessagesAndConversation,
} from "../features/chatSlice"
import { ChatContainer, WhatsappHome } from "../components/chat"
import SocketContext from "../context/SocketContext"

function Home({ socket }) {
  console.log(socket)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { activeConversation } = useSelector((state) => state.chat)
  console.log("activeConversation", activeConversation)
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token))
    }
  }, [user])

  useEffect(() => {
    socket.emit("join", user._id)
  }, [user])
  //listening to received messages
  useEffect(() => {
    socket.on("receive message", (message) => {
      dispatch(updateMessagesAndConversation(message))
    })
  }, [])
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* Container */}
      <div className="container flex h-full">
        {/* Side bar */}
        <Sidebar />
        {activeConversation._id ? <ChatContainer /> : <WhatsappHome />}
      </div>
    </div>
  )
}

const HomeWithSocket = (props) => {
  return (
    <SocketContext.Consumer>
      {(socket) => <Home {...props} socket={socket} />}
    </SocketContext.Consumer>
  )
}
export default HomeWithSocket
