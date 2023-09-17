import { useDispatch } from "react-redux"
import { CloseIcon } from "../../../../svg"
import { useRef } from "react"
import { addFiles } from "../../../../features/chatSlice"
import { getFileType } from "../../../../utils/file"

export default function Add() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  function filesHandler(e) {
    let files = Array.from(e.target.files)
    files.forEach((file) => {
      console.log(file)
      if (
        file.type !== "application/pdf" &&
        file.type !== "text/plain" &&
        file.type !== "application/msword" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        file.type !== "application/vnd.ms-powerpoint" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" &&
        file.type !== "application/vnd.ms-excel" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
        file.type !== "application/vnd.rar" &&
        file.type !== "application/zip" &&
        file.type !== "audio/mpeg" &&
        file.type !== "audio/wav" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "video/mp4" &&
        file.type !== "video/mpeg" &&
        file.type !== "video/webm"
      ) {
        files = files.filter((item) => {
          return item.name !== file.name
        })
        return
      } else if (file.size > 1024 * 1024 * 5) {
        alert(`${file.name} size is greater than 5mb`)
        files = files.filter((item) => {
          return item.name !== file.name
        })
        return
      } else {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (ev) => {
          dispatch(
            addFiles({
              file: file,
              fileData:
                getFileType(file.type) === "IMAGE" ||
                getFileType(file.type) === "VIDEO"
                  ? ev.target.result
                  : "",
              type: getFileType(file.type),
            })
          )
        }
      }
    })
  }
  return (
    <>
      <div
        className={`w-14 h-14 border dark:border-white rounded-md flex items-center justify-center overflow-hidden mt-2 cursor-pointer `}
        onClick={() => {
          inputRef.current.click()
        }}
      >
        <span className="rotate-45">
          <CloseIcon className="dark:fill-dark_svg_1" />
        </span>
      </div>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept="application/*,text/plain,image/png,image/jpeg,image/gif,image/jpg,video/mp4,video/mpeg,video/webm"
        onChange={filesHandler}
      />
    </>
  )
}
