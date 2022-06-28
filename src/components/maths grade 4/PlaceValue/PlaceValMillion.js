import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';
import data from './data';

import turtle from './images/turtle.png';
import turtle_left from './images/turtle_left.png';
import right_btn from './images/right.gif';
import left_btn from './images/left.gif';

import './PlaceVal_4.css';
import problemGenerator from './problemGenerator';

function PlaceValMillion(props) {
    const placeValues = ["100 M", "10 M", "M", "100 Th", "10 Th", "Th", "H", "T", "0"]
    const [array, setArray] = useState(data);
    const random_for_array = Math.floor(Math.random() * array.length);
    const [fullNumber, setFullNumber] = useState(array[random_for_array].name);

    const random_for_digit = Math.floor(Math.random() * data[random_for_array].subarray.length);
    const [array2, setArray2] = useState(array[random_for_array].subarray);
    const [digit, setdigit] = useState(array[random_for_array].subarray[random_for_digit]);

    const [userInput, setUserInput] = useState(0);
    const [direction, setDirection] = useState('r');
    const [validate, setValidate] = useState(0);

    const [problem, setProblem] = useState(problemGenerator.generate())

    const goLeft = () => {
        setUserInput(userInput - 10);
        setDirection('l')
    }
    const goRight = () => {
        setUserInput(userInput + 10);
        setDirection('r');
    }

    const travel = {
        left: 0 + userInput + '%'
    }

    const Validate = () => {
        if (userInput / 10 == problem.index) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    useEffect(() => {
        if (validate > 0) {
            Validate()
        }
    }, [validate]);

    useEffect(() => {
        if (userInput > 80) {
            setUserInput(80)
        }
        else if (userInput < 0) {
            setUserInput(0)
        }
    }, [userInput])

    console.log(array);
    return (
        <div className='display_game'>
            <div className='display_ques'>
                Place value of <span className='highlited'>{problem.digit}</span> in {problem.number}
            </div>
            <div className='game_screen'>
                <div className='directionHolder' style={travel}>
                    <img className='left_btn' src={left_btn} onClick={() => goLeft()} />
                    <img className='right_btn' src={right_btn} onClick={() => goRight()} />
                </div>

                {/* <Character className='object' style={travel} /> */}
                <img src={direction == 'r' ? turtle : turtle_left} style={travel} className='object' />
                <div style={{ display: "flex", width: "100%", justifyContent: "space-around", position: "absolute", top: "70%" }}>
                    {placeValues.map(item => {
                        return (
                            <div className='pv_tile' >
                                <h5>{item}</h5>
                            </div>
                        )
                    })}
                    <div className='pv_res'
                        onClick={() => setValidate(validate + 1)}
                    ><h5><i className='fa fa-paper-plane'></i></h5></div>
                </div>
            </div>
        </div>
    )
}

export default PlaceValMillion;