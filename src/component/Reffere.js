import React, { useEffect, useState } from 'react'
import './Reffere.css'
import { useSelector , useDispatch} from 'react-redux'
import { setComputerHand, setUserHand } from '../slices/gameSlice';
import { setScore } from '../slices/ScoreSlice';

function Reffere() {
    const userHand = useSelector(state => state.game.userHand);
    const compHand = useSelector(state => state.game.computerHand);
    const [result, setResult] = useState('You Lose');
    const dispatch = useDispatch();

    const win = () => {
        console.log(userHand, compHand)
        if( userHand === "paper" && compHand === 'rock') {
            dispatch(setScore(1));
            setResult('You Win')
        }

        if( userHand === "rock" && compHand === 'scissor') {
            dispatch(setScore(1));
            setResult('You Win')
        }

        if( userHand === "scissor" && compHand === 'paper') {
            dispatch(setScore(1));
            setResult('You Win')
        }
    }

    useEffect(()=> {
        win()
    },[compHand])
    return (
        <div className='reffere'>
           <h1>{result}</h1>
           <button 
                onClick={() => {
                dispatch(setComputerHand(''))
                dispatch(setUserHand(''))
                }}>
                Play Again
            </button>
        </div>
    )
}

export default Reffere
