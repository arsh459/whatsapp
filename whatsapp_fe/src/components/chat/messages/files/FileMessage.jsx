import moment from "moment"
import { TraingleIcon } from "../../../../svg"
import FileImageVideo from "./FileImageVideo"
import FileOthers from "./FileOthers"

export default function FileMessage({ FileMessage, message, me }) {
  const { type, file } = FileMessage
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        me ? "ml-auto justify-end" : ""
      }`}
    >
      <div>
        <div
          className={`relative h-full dark:text-dark_text_1  rounded-lg ${
            me
              ? " border-[3px] border-green_3"
              : " border-[3px] dark:bg-dark_bg_2"
          } ${
            me && file.public_id.split(".")[1] === "png"
              ? "bg-white"
              : "bg-green_3 p-1"
          }`}
        >
          <p
            className={`h-full text-sm ${
              type !== "IMAGE" && type !== "VIDEO" ? "pb-5" : ""
            }`}
          >
            {FileMessage.type === "IMAGE" || FileMessage.type === "VIDEO" ? (
              <>
                <FileImageVideo url={file.secure_url} type={type} />
              </>
            ) : (
              <>
                <FileOthers file={file} type={type} />
              </>
            )}
          </p>
          <span className="absolute right-1.5 bottom-1.5 leading-none  text-xs text-dark_text_5">
            {moment(message.createdAt).format("HH:mm")}
          </span>
        </div>
      </div>
    </div>
  )
}
