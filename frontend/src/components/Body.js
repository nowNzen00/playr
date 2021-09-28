import React, { useEffect } from "react"
import "./Body.css"
import TinderCard from "react-tinder-card"
import { useUser } from "./UserProvider"

function Body() {
  const { getOtherUsers, updateSwipedRight, users } = useUser()
  useEffect(() => {
    getOtherUsers()
  }, [getOtherUsers])

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete)
  }

  return (
    <div className="playrCards">
      <div className="card_container">
        {users.map((user) => (
          <TinderCard
            className="swipe"
            key={user.name}
            preventSwipe={["up"]}
            style={{ height: 100, width: 100 }}
            onSwipe={(dir) => swiped(dir, user.name)}
            onCardLeftScreen={() => updateSwipedRight(user._id)}
          >
            <div
              style={{ backgroundImage: `url(${user.imgUrl})` }}
              className="card"
            >
              <h3>{user.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Body
