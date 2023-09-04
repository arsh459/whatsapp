import { useSelector } from "react-redux"
import { Conversation } from "./index"
import { checkOnlineStatus, getConversationId } from "../../../utils/chat"

export default function Conversations({ onlineUsers, typing }) {
  const { conversations, activeConversation } = useSelector((state) => {
    return state.chat
  })
  const { user } = useSelector((state) => {
    return state.user
  })
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            .filter((c) => {
              console.log("id", c._id)
              console.log("id", activeConversation._id)
              return c.latestMessage || c._id === activeConversation._id
            })
            .map((convo) => {
              let check = checkOnlineStatus(onlineUsers, user, convo.users)
              return (
                <Conversation
                  convo={convo}
                  key={convo._id}
                  online={check}
                  typing={typing}
                />
              )
            })}
      </ul>
    </div>
  )
}
