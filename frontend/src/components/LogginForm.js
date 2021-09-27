import React from "react";
import "./LoginForm.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { BrowserRouter as Link } from "react-router-dom";

function LogginForm() {
  return (
    <body>
      <div className="login-container">
        <div className="box">
          <h1>Log in</h1>
          <div className="user">
            <PersonIcon className="icon" />
            <input
              type="text"
              name="username"
              id="username"
              autocomplete="off"
              placeholder="Username"
            />
            <LockIcon className="icon" />
            <input
              type="text"
              name="password"
              id="password"
              autocomplete="off"
              placeholder="Password"
            />
          </div>
          <p className="reset-password">Forgot Password?</p>
          <div className="login-button">
            <Link to="/">
              <button className="button">Log in</button>
            </Link>
            <p className="signup">
              First time here? <span>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LogginForm;
