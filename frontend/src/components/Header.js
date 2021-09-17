import React from "react"
import "./Header.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AdjustIcon from "@mui/icons-material/Adjust"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import IconButton from "@mui/material/IconButton"

function header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon className="profile_icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <AdjustIcon className="placeHolder_icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <InsertCommentIcon className="directMessge_icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default header
