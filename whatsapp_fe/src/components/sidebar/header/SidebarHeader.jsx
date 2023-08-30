import { useSelector } from "react-redux"
import { CommunityIcon, StoryIcon, DotsIcon, ChatIcon } from "../../../svg"
export default function SidebarHeader() {
  let { user } = useSelector((store) => {
    return store.user
  })
  return (
    <div className="h-[50px] dark:bg-dark_bg_2 flex items-center p16">
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        {/* User image */}
        <button className="btn">
          <img
            src={user.picture}
            alt={user.name}
            className="w-full h-full round-full object-cover"
          />
        </button>
        {/* User icons */}
        <ul className="flex items-center gap-x-2 first-letter:5">
          <li>
            <button className="btn">
              <CommunityIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <StoryIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <ChatIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}