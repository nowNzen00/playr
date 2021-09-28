import React, { useState, useEffect } from "react"
import "./Body.css"
import TinderCard from "react-tinder-card"
import axios from "axios"

function Body() {
  const myId = "615234e2df67c8cdf9a6e563"

  const [users, setUsers] = useState([])
  async function fetchData() {
    const req = await axios.get("http://localhost:8001/playr/cards")
    setUsers(req.data.filter((user) => user._id !== myId))
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(users)
  const swiped = (direction, nameToDelte) => {
    console.log("removing " + nameToDelte)
  }

  const outOfFrame = (user) => {
    console.log(user.name + " left the screen")
    console.log(user)
    fetch(`http://localhost:8001/playr/cards/${myId}/${user._id}`)
  }

  return (
    <div className="playrCards">
      <div className="card_container">
        {users.map((users) => (
          <TinderCard
            className="swipe"
            key={users.name}
            preventSwipe={["up"]}
            style={{ height: 100, width: 100 }}
            onSwipe={(dir) => swiped(dir, users.name)}
            onCardLeftScreen={() => outOfFrame(users)}
          >
            <div
              style={{ backgroundImage: `url(${users.imgUrl})` }}
              className="card"
            >
              <h3>{users.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Body
