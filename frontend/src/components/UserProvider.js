import React from "react"
const UserContext = React.createContext()

function useUser() {
  return React.useContext(UserContext)
}
function UserProvider({ children }) {
  const myId = "615234e2df67c8cdf9a6e563"
  const [user, setUser] = React.useState()
  React.useEffect(() => {
    fetch(`http://localhost:8001/playr/${myId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data })
        setUser(data)
      })
  }, [])
  return (
    <UserContext.Provider
      value={{
        user: {
          ...user,
          matches: user?.matches?.filter((i) => i !== "") ?? [],
        },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider, useUser }
