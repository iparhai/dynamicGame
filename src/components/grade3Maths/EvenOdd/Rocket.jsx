import React from 'react';
import './EvenOdd.css';

function Rocket({Coord,Release}){
    const aim = {
        top : 2+Coord+'%',
        left : 1+Release+'%'
    }
    // console.log(Coord)
    return(
        <div className='Rocket' style={aim}>

        </div>
    )
}

export default Rocket;