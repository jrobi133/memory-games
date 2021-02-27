import React from "react";
import "./Highscores.css";
import '../../App.css';




function HighScores() {

    const scoreList = [
        {
            id: 1,
            name: " Derrick",
            score: "(14 points) ",
            rank: "1- ",
            cName: "player1"
        },

        {
            id: 2,
            name: " John",
            score: "(12 points) ",
            rank: "2- ",
            cName: "player2"
        },

        {
            id: 3,
            name: " Travis",
            score: "(11 points) ",
            rank: "3- ",
            cName: "player3"
        },

        {
            id: 4,
            name: " Logan",
            score: "(9 points) ",
            rank: "4- ",
            cName: "player4"
        },

        {
            id: 5,
            name: " Jorgen",
            score: "(7 points) ",
            rank: "5- ",
            cName: "player5"
        },
    ]

    return (
        <h1 className='highscores'>

            <div class="card bg-dark">
                <header>Memory Games</header>
                <div style={{ fontSize: 20, textAlign: "center", color: "red" }}>High Scores:</div>
            -
            {scoreList.map((item, index) => {
                    return (
                        // <ul key={index} class="card">
                        <li key={index} className={item.cName}>{item.rank}{item.score}{item.name}</li>
                        // </ul>
                    )
                })}
            -
        </div>
        </h1>
    );
}

export default HighScores