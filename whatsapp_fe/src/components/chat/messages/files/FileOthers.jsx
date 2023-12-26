import { useEffect } from "react"
import { DownloadIcon } from "../../../../svg"
import { useState } from "react"
// import { v2 as cloudinary } from "cloudinary"

export default function FileOthers({ file, type }) {
  // const [downloadUrl, setDownloadUrl] = useState(null)
  useEffect(() => {})
  return (
    <div className="bg-green_4 p-2 rounded-lg">
      <div className="flex justify-between gap-x-8">
        <div className="flex items-center gap-2">
          <img src={`../../../../images/file/${type}.png`} alt="" />
          <div className="flex flex-col gap-2">
            <h1>
              {file.original_filename}.{file.public_id.split(".")[1]}
            </h1>
            <span className="text-sm">
              {type} - {file.bytes}B
            </span>
          </div>
        </div>
        <a href={file.secure_url} target="_blank" download>
          <DownloadIcon />
        </a>
      </div>
    </div>
  )
}
