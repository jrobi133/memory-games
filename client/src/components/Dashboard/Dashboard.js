import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Nav from "../Nav/Nav"

import Form from "../Form/Form"
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
  <Nav />
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
