export default function MatchListItem({ user }) {
  return (
    <div className="matched-tag">
      <img className="user2-img" src="" alt="user2" />
      <h1> You and {user.name} have matched</h1>
      <button>have a chat!</button>
    </div>
  )
}
