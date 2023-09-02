import { useState } from "react"

import { Notifications } from "./notifications/index.js"
import { Search, SearchResults } from "./search"
import { Conversations } from "./conversations"
import SidebarHeader from "./header/SidebarHeader.jsx"

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([])
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader />
      {/* Notification */}
      <Notifications />
      {/* Search bar */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />

      {/* Conversations */}
      {searchResults.length > 0 ? (
        <>
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </>
      ) : (
        <>
          <Conversations />
        </>
      )}
    </div>
  )
}
