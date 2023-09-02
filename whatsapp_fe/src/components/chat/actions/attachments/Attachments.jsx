import { useState } from "react"
import { AttachmentIcon } from "../../../../svg"
import Menu from "./Menu"

export default function Attachments({
  setShowAttachments,
  showAttachments,
  setShowPicker,
}) {
  return (
    <li className="relative">
      <button
        onClick={() => {
          setShowAttachments((prev) => !prev)
          setShowPicker(false)
        }}
        className="btn"
        type="button"
      >
        <AttachmentIcon className="dark:fill-dark_svg_1" />
      </button>
      {/* menu */}
      {showAttachments ? <Menu /> : null}
    </li>
  )
}
