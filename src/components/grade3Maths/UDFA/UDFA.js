import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

function UDFA(props){
    return(
        <Main onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer}/>
    )
}

export default UDFA;