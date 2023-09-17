export default function FileImageVideo({ url, type }) {
  return (
    <div>
      {type === "IMAGE" ? (
        <>
          <img src={url} className="cursor-pointer rounded-md" />
        </>
      ) : (
        <>
          <video src={url} controls className="cursor-pointer" />
        </>
      )}
    </div>
  )
}
