import React from 'react'
import Main from './Main';


export default function parameter(props) {
    return (
            <Main onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer}/>
    )
}
