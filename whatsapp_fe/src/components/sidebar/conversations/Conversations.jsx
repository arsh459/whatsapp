import { useSelector } from "react-redux"
import { Conversation } from "./index"

export default function Conversations() {
  const { conversations } = useSelector((state) => {
    return state.chat
  })
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((convo) => {
            return <Conversation convo={convo} key={convo._id} />
          })}
      </ul>
    </div>
  )
}
