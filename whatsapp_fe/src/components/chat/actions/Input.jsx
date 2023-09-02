import { useState } from "react"

export default function Input({ message, setMessage, textRef }) {
  function onChangeHandler(e) {
    setMessage(e.target.value)
  }
  console.log("message", message)
  return (
    <div className="w-full ">
      <input
        type="text"
        ref={textRef}
        className="dark:bg-dark_hover_1 dark dark:text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
        placeholder="Type a message"
        value={message}
        onChange={onChangeHandler}
      />
    </div>
  )
}
