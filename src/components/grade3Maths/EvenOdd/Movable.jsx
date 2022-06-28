import React from 'react';
import ReactDOM from 'react-dom';
import Jet from './images/plane.png';
import './EvenOdd.css';

function Movable({Coord}){
    const aim = {
        top : 1+Coord+'%',
    }
    // console.log(Coord)
    return(
        <div className='JetHolder' style={aim}>
            <img src={Jet} width='100%'/>
        </div>
    );
}

export default Movable;