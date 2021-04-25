import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setComputerHand } from '../slices/gameSlice';
import './Contest.css';
import Reffere from './Reffere';


const hands = ['rock', 'paper', 'scissor'];


function Contest() {

    const dispatch = useDispatch();

    const userHand = useSelector(state => state.game.userHand);
    const compHand =  useSelector(state => state.game.computerHand);

    const [timer, setTimer] = useState(false);

    useEffect(() => {
        
        let cpHand = hands[Math.floor(Math.random() * hands.length)]

        setTimeout(() => dispatch(setComputerHand(cpHand)), 500);
        setTimeout(() => setTimer(true), 1000);


    },[]);


    return (
        <div className='contest'>
            <div className='contest__container'>
                <div className='contest__handContainer'>
                    <h1>You Picked</h1>
                    <img src={`/images/hand-${userHand}.png`}/>
                </div>
                {timer && <Reffere />}
                <div className='contest__handContainer'>
                    <h1>The House Picked</h1>
                    <img src={`/images/hand-${compHand ? compHand : "blank"}.png`} />
                </div>
            </div>
            <h1>{console.log(compHand)}</h1>
        </div>
    )
}

export default Contest;



// this is where you select your hand
