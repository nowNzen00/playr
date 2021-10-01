import React from "react"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LogginForm from "./components/LogginForm"
import MatchList from "./components/MatchList"
import DirectMessagePage from "./components/DirectMessagePage"
import ProfilePage from "./components/ProfilePage"
import SignUp from "./components/SignUp"
import { UserProvider } from "./components/UserProvider"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/LogginForm">
              <LogginForm />
            </Route>
            <Route path="/MatchList">
              <MatchList />
            </Route>
            <Route path="/DirectMessagePage">
              <DirectMessagePage />
            </Route>
            <Route path="/ProfilePage">
              <ProfilePage />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/">
              <Header />
              <Body />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
