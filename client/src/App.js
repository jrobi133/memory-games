import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import HighScores from "./components/Highscores/Highscores"
import GameManager from "./components/GameManager/GameManager"
import Navbar from './components/Nav/Nav';

function App() {
  return (
      <>
        <Router>
        <Navbar />
            <Switch>
              <Route exact path="/highscores" component={HighScores} />
              <Route exact path="/" component={Dashboard} />
              <Route path="/game-manager" component={GameManager} />
            
            </Switch>

        </Router>
      </>

  )
}


export default App
