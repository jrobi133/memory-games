import React from "react"
import Signup from "./components/Signup/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile/UpdateProfile"
import HighScores from "./components/Highscores/Highscores"
import GameManager from "./components/GameManager/GameManager"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/highscores" component={HighScores} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/game-manager" component={GameManager} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              

            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}


export default App
