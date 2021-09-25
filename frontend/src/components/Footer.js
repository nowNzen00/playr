import React from "react";
import "./Footer.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="buttons">
      <IconButton>
        <KeyboardArrowLeftIcon fontSize="large" className="swipeLeft_icon" />
      </IconButton>

      <Link to="/ProfilePage">
        <IconButton>
          <AccountCircleIcon fontSize="large" className="Profile" />
        </IconButton>
      </Link>

      <IconButton>
        <KeyboardArrowRightIcon fontSize="large" className="swipeRight_icon" />
      </IconButton>
    </div>
  );
}
export default Footer;
