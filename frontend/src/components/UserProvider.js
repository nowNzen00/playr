import React, { useEffect, useState, useContext, useCallback } from "react"
import axios from "axios"
const UserContext = React.createContext()

function useUser() {
  return useContext(UserContext)
}
function UserProvider({ children }) {
  const myId = "615234e2df67c8cdf9a6e563"
  const [user, setUser] = useState()
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUpdatedUserData()
  }, [])

  async function getUpdatedUserData() {
    const res = await fetch(`http://localhost:8001/playr/${myId}`)
    const userData = await res.json()
    setUser(userData)
  }
  async function updateSwipedRight(matchedUserId) {
    // update data
    await fetch(`http://localhost:8001/playr/cards/${myId}/${matchedUserId}`)

    // store updated data in current user state
    getUpdatedUserData()
  }
  function updateMatches() {
    getUpdatedUserData()
  }
  async function getOtherUsers() {
    // move fetch call here
    const req = await axios.get("http://localhost:8001/playr/cards")
    setUsers(req.data.filter((user) => user._id !== myId))
  }

  return (
    <UserContext.Provider
      value={{
        user: {
          ...user,
          // matches: user?.matches?.filter((i) => i !== "") ?? [],
        },
        getOtherUsers: useCallback(() => getOtherUsers(), []),
        updateMatches,
        updateSwipedRight,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider, useUser }
