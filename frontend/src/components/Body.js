import React, { useEffect } from "react"
import "./Body.css"
import TinderCard from "react-tinder-card"
import { useUser } from "./UserProvider"

function Body() {
  const { getOtherUsers, updateSwipedRight, users } = useUser()
  useEffect(() => {
    getOtherUsers()
  }, [getOtherUsers])

  console.log(new Date().getTime(), { users })
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
            onCardLeftScreen={(direction) => {
              if (direction !== "left") {
                updateSwipedRight(user._id)
              }
            }}
          >
            <div className="card">
              <img src={user.imgUrl} alt="img" />
              <h3>{user.name}</h3>

              <div>
                {" "}
                {user.songs.map((x) => {
                  return (
                    <iframe
                      key={x}
                      src={x}
                      width="100%"
                      height="75px"
                      frameBorder="0"
                      allowfullscreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  )
                })}
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Body
