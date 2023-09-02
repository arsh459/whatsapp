import { logout } from "../../../features/userSlice"
import { useDispatch, useSelector } from "react-redux"
export default function Menu() {
  const dispatch = useDispatch()
  return (
    <div className="absolute right-1 z-50 dark:bg-dark_bg_2 dark:text-dark_text_1 shadow-md w-52">
      <ul>
        <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
          <span>New Group</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
          <span>New Community</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
          <span>Starred messages</span>
        </li>
        <li className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3">
          <span>Settings</span>
        </li>

        <li
          className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3"
          onClick={() => {
            console.log("in logout")
            dispatch(logout())
          }}
        >
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )
}
