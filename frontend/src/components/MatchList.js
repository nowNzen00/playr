import React from "react"
import MatchListItem from "./MatchListItem"
import "./MatchList.css"
import { useUser } from "./UserProvider"

function MatchList() {
  const { user } = useUser()
  console.log(user)
  return (
    <div className="MatchList">
      <div>
        {user?.swipedRight?.length ? (
          <div>
            <h3>Matches</h3>
            {user?.swipedRight?.map((user) => (
              <MatchListItem key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div>No matches yet</div>
        )}
      </div>
    </div>
  )
}
export default MatchList
