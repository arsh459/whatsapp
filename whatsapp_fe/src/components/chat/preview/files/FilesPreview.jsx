import { useState } from "react"
import FileViewer from "./FileViewer"
import HandleAndSend from "./HandleAndSend"
import Header from "./Header"
import Input from "./Input"

export default function FilesPreview() {
  const [message, setMessage] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-y-5">
        {/* header */}
        <Header activeIndex={activeIndex} />

        {/* viewing selected file */}
        <FileViewer activeIndex={activeIndex} />

        <div className="w-full flex flex-col items-center">
          {/* Message input */}
          <Input message={message} setMessage={setMessage} />

          {/* Send and manipulate files */}
          <HandleAndSend
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            message={message}
          />
        </div>
      </div>
    </div>
  )
}
