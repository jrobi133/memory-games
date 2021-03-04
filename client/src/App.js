import React, { useState, useEffect, } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { useAuth0 } from "@auth0/auth0-react";

// Components 
import Loading from "./components/loading"
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/index';
import ProtectedRoute from "./auth/protected-route"

// Pages 
import Profile from "./pages/profile/profile"
import Dashboard from "./pages/Dashboard/Dashboard"
import HighScores from "./pages/Highscores/Highscores"
import GameManager from "./pages/GameManager/GameManager"
import GamePlay from "./pages/GamePlay/GamePlay"

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const [reload, setReload] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const allHeroes = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoggedIn(isAuthenticated); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, isLoading]);
  
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]); // allHeroes

  if (isLoading) {
    return <Loading />;

  } else {
    return (
      <Router path="/" >
        <Navbar loggedIn={loggedIn} setReload={setReload} />
        <Switch>
          <ProtectedRoute exact path="/highscores" component={HighScores} />
          <ProtectedRoute exact path="/game-play" component={(props) => allHeroes.length === 0 ? 
             <Loading /> : <GamePlay 
            {...props} 
            heroes={allHeroes}
            pageTitle="Game Play"
            game_message=""
            // highScore={} // extract users high score here maybe 
          />} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/game-manager" component={GameManager} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    ) 
  }

}




export default App
