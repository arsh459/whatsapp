import { useDispatch, useSelector } from "react-redux"
import ChatHeader from "./header/ChatHeader"
import ChatMessages from "./messages/ChatMessages"
import { useEffect } from "react"
import { getConversationMessages } from "../../features/chatSlice"
import { ChatActions } from "./actions"
import { checkOnlineStatus, getConversationId } from "../../utils/chat"

export default function ChatContainer({ onlineUsers, typing }) {
  const dispatch = useDispatch()
  const { activeConversation, messages } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.user)
  const { token } = user
  const values = { token, convo_id: activeConversation?._id }
  console.log("messges", messages)
  useEffect(() => {
    if (activeConversation._id) {
      dispatch(getConversationMessages(values))
    }
  }, [activeConversation])
  return (
    <div className="relative w-full h-screen border-l dark:border-l-dark_border_2 select-none ">
      {/* container */}
      <div className="h-full relative flex flex-col">
        {/* chat header */}
        <ChatHeader
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        />
        {/* chat Messages */}
        <ChatMessages typing={typing} />
        <ChatActions />
      </div>
    </div>
  )
}
