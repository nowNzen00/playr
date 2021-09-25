import React, { useState, useEffect } from "react"
import "./Body.css"
import TinderCard from "react-tinder-card"
import axios from "axios"

function Body() {
  const [users, setUsers] = useState([])
  async function fetchData() {
    const req = await axios.get("http://localhost:8001/playr/cards")
    setUsers(req.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(users)
  const swiped = (direction, nameToDelte) => {
    console.log("removing " + nameToDelte)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
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
            onCardLeftScreen={() => outOfFrame(users.name)}
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
