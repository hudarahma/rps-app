import React from 'react'
import Hand from './Hand'
import './Hands.css'

function Hands() {
    
    return (
        <div className='hands'>
            <div className='hands__triangle'>
                <img src='/images/bg-triangle.svg'/>
            </div>
            <div className='hands__top'>
                <Hand value='paper'/>
                <Hand value='scissor'/>
            </div>
            <div className='hands__bottom'>
                <Hand value='rock'/>
            </div>
            

        </div>
    )
}

export default Hands
