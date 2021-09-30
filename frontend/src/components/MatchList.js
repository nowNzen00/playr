import React from "react"
import MatchListItem from "./MatchListItem"
import "./MatchList.css"
import { useUser } from "./UserProvider"
import HomeIcon from "@mui/icons-material/Home"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"

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
      <div className="matchListItemsFooter">
        <Link to="/">
          <IconButton>
            <HomeIcon className="home-icon" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/ProfilePage">
          <IconButton>
            <AccountCircleIcon className="profile-icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </div>
  )
}
export default MatchList
