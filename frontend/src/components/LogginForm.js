import React from "react"
import "./LoginForm.css"
import PersonIcon from "@mui/icons-material/Person"
import LockIcon from "@mui/icons-material/Lock"
import { Link } from "react-router-dom"

function LogginForm() {
  return (
    <div className="">
      <div className="login-container">
        <div className="box">
          <h1>Log in</h1>
          <div className="user">
            <PersonIcon className="icon" />
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder="Username"
            />
            <LockIcon className="icon" />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
          <p className="reset-password">Forgot Password?</p>

          <Link to="/">
            <div className="login-button">
              <button className="button">Log in</button>
            </div>
          </Link>
          <div className="spotify-login">
            <button className="spotify-button">Log in with Spotify</button>
          </div>

          <div className="signUp-question">
            <Link to="/SignUp">
              <p className="signup">
                First time here? <span className="signUp-link">Sign Up</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogginForm
