import React from "react"
import '../../App.css';
import { Button } from 'reactstrap'
import Footer from '../../components/Footer/index';




export default function Dashboard() {
  return <div className='dashboard'> 
    <Button href="/game-play" variant="primary">Play Game</Button>
    <Footer />
  </div>;
}
