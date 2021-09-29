import React from "react";
import "./DirectMessagePage.css";
import { Link } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";

function DirectMessagePage() {
  return (
    <div className="under-construction">
      <h1>404</h1>
      <div className="icon-box">
        <ConstructionIcon className="hammer" />
      </div>
      <h3>I'm sorry, it looks like this area is under construction</h3>
      <Link to="/">
        <div className="home-button">
          <button className="construction-button">Home</button>
        </div>
      </Link>
    </div>
  );
}

export default DirectMessagePage;
