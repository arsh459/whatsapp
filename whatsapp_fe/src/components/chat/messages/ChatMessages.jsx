import { useSelector } from "react-redux"
import Message from "./Message"
import { useEffect, useRef } from "react"

export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.user)
  const endRef = useRef()
  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" })
  }, [messages])
  return (
    <div className="mb-[60px] flex-1 bg-[url('https:res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')] bg-cover bg-no-repeat overflow-auto scrollbar py-2 px-[5%] overflow_scrollbar_1">
      {/* Messages */}
      {messages &&
        messages.map((message) => {
          return (
            <Message
              message={message}
              key={message._id}
              me={user._id === message.sender._id}
            />
          )
        })}
      <div
        className={`w-full flex mt-2 space-x-3 max-w-xs ml-auto justify-end`}
        ref={endRef}
      ></div>
    </div>
  )
}
