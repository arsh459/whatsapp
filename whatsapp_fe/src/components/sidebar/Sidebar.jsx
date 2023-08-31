import { useState } from "react"
import { SidebarHeader } from "./header"
import { Notifications } from "./notifications/index.js"
import { Search } from "./search"
import { Conversations } from "./conversations"

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([])
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader />
      {/* Notification */}
      <Notifications />
      {/* Search bar */}
      <Search searchLength={searchResults.length} />
      {/* Conversations */}
      <Conversations />
    </div>
  )
}
