import { useDispatch, useSelector } from "react-redux"
import ChatHeader from "./header/ChatHeader"
import ChatMessages from "./messages/ChatMessages"
import { useEffect } from "react"
import { getConversationMessages } from "../../features/chatSlice"
import { ChatActions } from "./actions"

export default function ChatContainer() {
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
        <ChatHeader />
        {/* chat Messages */}
        <ChatMessages />
        <ChatActions />
      </div>
    </div>
  )
}
