import React from "react"
import "./Footer.css"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import ReplayIcon from "@mui/icons-material/Replay"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import IconButton from "@mui/material/IconButton"
function Footer() {
  return (
    <div className="buttons">
      <IconButton>
        <KeyboardArrowLeftIcon fontSize="large" clasName="swipeLeft_icon" />
      </IconButton>
      <IconButton>
        <ReplayIcon fontSize="large" className="rewind_icon" />
      </IconButton>
      <IconButton>
        <KeyboardArrowRightIcon fontSize="large" className="swipeRight_icon" />
      </IconButton>
    </div>
  )
}
export default Footer
