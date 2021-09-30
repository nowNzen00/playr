import React, { useState, useEffect } from "react"
import "./ProfilePage.css"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import IconButton from "@mui/material/IconButton"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { useUser } from "./UserProvider"

function ProfilePage() {
  const [currUser, setCurrUser] = useState({ songs: [] })
  const { user } = useUser()

  useEffect(() => {
    setCurrUser(user._doc)
  }, [user._doc])

  console.log(currUser)
  return (
    <div className="body">
      <div className="card">
        <img src={currUser?.imgUrl} alt="img" />
        <h3>{currUser?.name}</h3>

        <div>
          {" "}
          {currUser?.songs?.map((x) => {
            return (
              <iframe
                key={x}
                src={x}
                width="100%"
                height="75px"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            )
          })}
        </div>
      </div>
      <div className="profile-footer">
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="LogginForm">
          <button className="profile-logout">
            <ExitToAppIcon />
            Log out
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage
