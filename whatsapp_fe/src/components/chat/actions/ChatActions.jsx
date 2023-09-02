import { Attachments } from "./attachments"
import Input from "./Input"
import { SendIcon } from "../../../svg"
import { useReducer, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage } from "../../../features/chatSlice"
import { ClipLoader } from "react-spinners"
import EmojiPickerApp from "./EmojiPickerApp"

export default function ChatActions() {
  const dispatch = useDispatch()
  const { activeConversation, status } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.user)
  const { token } = user
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const textRef = useRef()
  const [showPicker, setShowPicker] = useState(false)
  const [showAttachments, setShowAttachments] = useState(false)
  const values = { message, convo_id: activeConversation._id, files: [], token }
  const sendMessageHandler = async (e) => {
    e.preventDefault()
    await dispatch(sendMessage(values))
    setMessage("")
    setShowPicker(false)
    setLoading(true)
  }
  return (
    <form
      onSubmit={(e) => {
        sendMessageHandler(e)
      }}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none "
    >
      {/* Container */}
      <div className="w-full flex items-center gap-x-2">
        {/* icons */}
        <ul className="flex gap-x-2">
          <EmojiPickerApp
            textRef={textRef}
            message={message}
            setMessage={setMessage}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowAttachments={setShowAttachments}
          />
          <Attachments
            setShowAttachments={setShowAttachments}
            showAttachments={showAttachments}
            setShowPicker={setShowPicker}
          />
        </ul>
        {/* Input */}
        <Input message={message} setMessage={setMessage} textRef={textRef} />
        {/* send button */}
        <button className="btn" type="submit">
          {status === "loading" && loading ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  )
}
