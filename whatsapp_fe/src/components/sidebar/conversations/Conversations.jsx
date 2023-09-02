import { useSelector } from "react-redux"
import { Conversation } from "./index"

export default function Conversations() {
  const { conversations, activeConversation } = useSelector((state) => {
    return state.chat
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
              return <Conversation convo={convo} key={convo._id} />
            })}
      </ul>
    </div>
  )
}
