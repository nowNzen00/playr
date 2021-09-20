import React, { useState } from "react";
import "./Body.css";
import TinderCard from "react-tinder-card";

function Body() {
  const [users, setUsers] = useState([
    {
      name: "Kenneth Charles Blume III",
      url: "https://dazedimg-dazedgroup.netdna-ssl.com/903/azure/dazed-prod/1270/7/1277818.jpg",
    },
    {
      name: "Lewis Hamilton",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/440px-Lewis_Hamilton_2016_Malaysia_2.jpg",
    },
  ]);

  const swiped = (direction, nameToDelte) => {
    console.log("removing " + nameToDelte);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

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
  );
}

export default Body;
