import React from "react"
import MatchListItem from "./MatchListItem"
import "./MatchList.css"
import { useUser } from "./UserProvider"

function MatchList() {
  const { user } = useUser()

  const myMatches = user?.matches
  console.log({ user })
  console.log(myMatches)
  return (
    <div className="MatchList">
      {myMatches?.length ? (
        myMatches?.map((user) => <MatchListItem key={user.id} user={user} />)
      ) : (
        <div>No matches yet</div>
      )}
    </div>
  )
}
export default MatchList
