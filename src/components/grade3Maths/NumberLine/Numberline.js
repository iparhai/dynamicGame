import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GlobalState from '../../HintsContext';
import problemGenerator from './problemGenerator';
import getURLParams from "../../../utils/getURLParams";

import fish_right from './images/fishR.gif';
import fish1_left from './images/fishL.gif';
import line1 from './images/line1.png';
import line2 from './images/line2.png';
import left_btn from './images/left.png';
import right_btn from './images/right.png';

import './Numberline.css';
import { number } from 'prop-types';

function Numberline(props){
    const [problem,setProblem] = useState(problemGenerator.generate());
    // const randomIndex = Math.floor(Math.random()*problem.numbers.length);

    const [problemNumber,setProblemNumber] = useState(problem.random);
    console.log(problemNumber)
    const [click,setClick] = useState(0);
    const [direction,setDirection] = useState('r');

    const [length, setLength] = useState([0, 7, 17, 26, 36, 45, 55, 64, 74, 83, 93]);
    const [hintState, setHintState] = React.useContext(GlobalState);
    useEffect(() => {
        const hintText = {
            a: `tamthil ${problemNumber} bitahrik alsamakat ealaa alkhati`,
            p: `په کرښه کې د کب په حرکت کولو سره عدد څرګند کړئ`,
            u: `machhlee ko line par le ja kar ${problemNumber} pe muntaqil karein`,
            e: `Represent ${problemNumber} by moving the fish on the line`,
            k : `줄에서 물고기를 움직여 ${problemNumber}를 나타냅니다.`
        }
        let hT;
        if (getURLParams.lang == "a") {
            hT = hintText.a
        } else if (getURLParams.lang == "u") {
            hT = hintText.u
        } else if (getURLParams.lang == "p") {
            hT = hintText.p
        } else if(getURLParams.lang == 'k'){
            hT = hintText.k
        }
         else {
            hT = hintText.e
        }
        setHintState(hT)
        // setBoard(getAsset.getObjectByProperty("board|n"))
    }, [])
    const dif = getURLParams.dif;

    const travel = {
        left: 0 + length[click] + '%'
    }
    const GoLeft = () => {
        setClick(click - 1);
        setDirection('l');
    }
    const GoRight = () => {
        setClick(click + 1);
        setDirection('r');
    }

    useEffect(() => {
        if (click > 10) {
            setClick(10);
        }
        else if (click < 0) {
            setClick(0);
        }
    }, [click]);

    const Evaluate = () => {
        if (dif == 'b' || dif == 'i') {
            if (click == problemNumber) {
                props.onCorrectAnswer()
            } else {
                props.onWrongAnswer()
            }
        }
        else {
            if (click * 10 == problemNumber) {
                props.onCorrectAnswer()
            } else {
                props.onWrongAnswer()
            }
        }
    }
    console.log(dif);
    return (
        <div className='numberline_gamescreen'>
            <div className='problem'>
                <h6>{problem.question}</h6>
            </div>
            <div className='object_holder'>
                <img src={direction == 'r' ? fish_right : fish1_left} style={travel} />
            </div>
            <div className='numberline' style={{ backgroundImage: `url(${problem.background})` }}>
            </div>
            <div className='btn_holder'>
                <img className='left_btn' src={left_btn} onClick={() => GoLeft()} />
                <img className='right_btn' src={right_btn} onClick={() => GoRight()} />
            </div>
            <button className='btn fourth answerButton' onClick={() => Evaluate()}>
                {
                    dif == 'b' || dif == 'i' ?
                        click
                        :
                        click * 10
                }
            </button>
        </div>
    )
}

export default Numberline;