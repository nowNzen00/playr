import React, { useState } from "react"
import "./Body.css"
import TinderCard from "react-tinder-card"

function Body() {
  const [users, setUsers] = useState([
    {
      name: "Kenneth Charles Blume III",
      url: "https://dazedimg-dazedgroup.netdna-ssl.com/903/azure/dazed-prod/1270/7/1277818.jpg",
    },
    {
      name: "Lily Muni",
      url: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/05/11/088376fa-8dd4-11ea-a674-527cfdef49ee_image_hires_110653.jpg?itok=J68HSRo_&v=1589166420",
    },
  ])

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
              style={{ backgroundImage: `url(${users.url})` }}
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
