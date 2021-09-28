import React from "react"
import "./MatchList.css"
import MatchListItem from "./MatchListItem"

function MatchList({ users = [] }) {
  return (
    <div className="MatchList">
      {users.map((user) => (
        <MatchListItem key={user.id} user={user} />
      ))}
    </div>
  )
}
export default MatchList
