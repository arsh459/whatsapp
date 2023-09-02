import { useSelector } from "react-redux"
import { CloseIcon, EmojiIcon } from "../../../svg"
import EmojiPicker from "emoji-picker-react"
import { useEffect, useState } from "react"

export default function EmojiPickerApp({
  textRef,
  setMessage,
  message,
  showPicker,
  setShowPicker,
  setShowAttachments,
}) {
  const [cursorPosition, setCursorPosition] = useState()
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition
  }, [cursorPosition])
  function handleEmoji(emojidata, e) {
    console.log(emojidata)
    const { emoji } = emojidata
    const ref = textRef.current
    console.log(message)
    ref.focus()
    console.log("in the emoji picker", message)
    const start = message.substring(0, ref.selectionStart)
    const end = message.substring(ref.selectionStart)
    const newText = start + emoji + end
    setMessage(newText)
    setCursorPosition(start.length + emoji.length)
  }
  return (
    <li>
      <div
        className="btn"
        type="button"
        onClick={() => {
          setShowPicker((prev) => !prev)
          setShowAttachments(false)
        }}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </div>
      {showPicker ? (
        <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px] w-full">
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
        </div>
      ) : null}
    </li>
  )
}
