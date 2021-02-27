import React, { useState, useEffect } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import HighScores from "./pages/Highscores/Highscores"
import GameManager from "./pages/GameManager/GameManager"
import Navbar from './components/Nav/Navbar';
import Profile from "./pages/profile/profile"
import ProtectedRoute from "./auth/protected-route"
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading"
import GamePlay from "./pages/GamePlay/GamePlay"


const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const [reload, setReload] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    setLoggedIn(isAuthenticated); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, isLoading]);

  if (isLoading) {
    return <Loading />;

  } else {
    return (
      <Router path="/" >
        <Navbar loggedIn={loggedIn} setReload={setReload} />
        <Switch>
          <ProtectedRoute exact path="/highscores" component={HighScores} />
          <Route exact path="/game-play" component={GamePlay} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/game-manager" component={GameManager} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    ) 
  }

}


export default App
