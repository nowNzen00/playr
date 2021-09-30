import axios from "axios"
import "./MatchedListItem.css"
import { Link } from "react-router-dom"
export default function MatchListItem({ user }) {
  return (
    <div className="matched-tag">
      <img className="user2-img" src={user.imgUrl} alt="user2" />
      <h1> You and {user.name} have matched</h1>
      <Link to="/DirectMessagePage">
        <button className="chat-button">have a chat!</button>
      </Link>
    </div>
  )
}
