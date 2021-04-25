import React from 'react'
import { useSelector } from 'react-redux'
import './ScoreBoard.css'

function ScoreBoard() {

    const score = useSelector((state) => state.score);
    return (
        <div className='scoreboard'>
            <div className='scoreboard__gameName'>
                <img src='/images/ROCKPAPERSCISSORS..svg' alt='rps'/>
            </div>
            <div className='scoreboard__score'>
                <p>Score</p>
                <h1>{score}</h1>
            </div>
        </div>
    )
}

export default ScoreBoard
