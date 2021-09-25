import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdjustIcon from "@mui/icons-material/Adjust";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";

function header() {
  return (
    <div className="header">
      <Link to="/MatchList">
        <IconButton>
          <ListIcon className="profile_icon" fontSize="large" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton>
          <AdjustIcon className="placeHolder_icon" fontSize="large" />
        </IconButton>
      </Link>
      <Link to="/DirectMessagePage">
        <IconButton>
          <InsertCommentIcon className="directMessge_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default header;
