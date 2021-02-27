import React from "react"
import '../../App.css';
import { Button } from 'reactstrap'




export default function Dashboard() {
  return <div className='dashboard'> 
    <Button href="/game-play" variant="primary">Play Game</Button>
  </div>;
}
