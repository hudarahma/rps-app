import React from 'react'
import { setUserHand } from '../slices/gameSlice'
import { useDispatch} from 'react-redux'

function Hand({ value }) {

    const dispatch = useDispatch()
    const pickHand = (e, value) => {
        dispatch(setUserHand(value))
        // console.log(value, 'what is value in Hand?')
    }
    return (
        <div className='hand' onClick={(e) => pickHand(e, value)}>
            <img src={`/images/hand-${value}.png`}/>
            
        </div>
    )
}

export default Hand
