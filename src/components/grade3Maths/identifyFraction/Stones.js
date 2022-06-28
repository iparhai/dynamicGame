import React from 'react';
import ReactDOM from 'react-dom';
// inporting css
import './Stones.css';

function Stones(props){
    return(
        <div className='stones' style={props.stoneOfStyle} onClick={
            ()=>props.function(props.obj)
        }>
            <h1>{props.numerator}</h1>
            <h1><hr /></h1>
            <h1>{props.denominator}</h1>
        </div>
    );
}

export default Stones;