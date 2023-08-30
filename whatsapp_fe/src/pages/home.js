import { useEffect } from "react"
import { Sidebar } from "../components/sidebar"
import { useDispatch, useSelector } from "react-redux"
import { getConversations } from "../features/chatSlice"

export default function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    if (user.token) {
      dispatch(getConversations(user.token))
    }
  }, [user])
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="container flex min-h-screen">
        {/* Side bar */}
        <Sidebar />
      </div>
    </div>
  )
}
