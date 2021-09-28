import REACT from "react"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LogginForm from "./components/LogginForm"
import MatchList from "./components/MatchList"
import DirectMessagePage from "./components/DirectMessagePage"
import ProfilePage from "./components/ProfilePage"

function App() {
  const matchedUsers = [
    { id: 1, name: "Bob" },
    { id: 1, name: "John" },
    { id: 1, name: "Lisa" },
  ]
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/LogginForm">
            <LogginForm />
          </Route>
          <Route path="/MatchList">
            <MatchList users={matchedUsers} />
          </Route>
          <Route path="/DirectMessagePage">
            <DirectMessagePage />
          </Route>
          <Route path="/ProfilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/">
            <Header />
            <Body />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
