import React from "react"
import "./SignUp.css"
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className="signUpForm">
      <div className="signUp-container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" require placeholder="Username" />
          <input type="password" require placeholder="Password" />
          <input type="password" require placeholder="Confirm Password" />
          <input type="file" />
          <Link to="/">
            <div className="signUpButton-container">
              <button type="submit" className="signUp-button">
                Sign up
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
