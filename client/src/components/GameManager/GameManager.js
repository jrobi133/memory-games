import React, { useState, useEffect } from "react"
// import { Card, Button, Alert } from "react-bootstrap"
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useAuth } from "../../contexts/AuthContext"
import Nav from "../Nav/Nav"
import Posts from '../Posts/Posts';
import Form from "../Form/Form"
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import yoshi from '../../images/yoshi.png';


export default function GameManager() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()


  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
  <Nav />
  <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Game Manager</Typography>
        <img className={classes.image} src={yoshi} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  )
}