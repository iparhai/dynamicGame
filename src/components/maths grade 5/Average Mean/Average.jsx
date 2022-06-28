import React from 'react';
import problemGenerator from './problemGenerator';
import { useState, useEffect } from 'react';

import formula1 from './images/formula1.png';
import formula2 from './images/formula2.png';
import tile from './images/tile.jpg';
import './Average.css'

function Average(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [subQuestion, setSubQuestion] = useState(problem.string);
    const [proceed, setProceed] = useState(false);
    const [formula, setFormula] = useState({})
    const [formulas, setFormulas] = useState([
        {
            tick: 'right',
            image: formula1
        },
        {
            tick: 'wrong',
            image: formula2
        }   
    ].sort(()=>Math.random()-0.5))
    const [answer, setAnswer] = useState(problem.answer);
    const [options, setOptions] = useState(problem.options);


    useEffect(() => {
        let length = Object.getOwnPropertyNames(formula).length;
        if (length > 0) {
            if (formula.tick == 'right') {
                setProceed(!proceed);
            } else {
                setProceed(false);
            }
        }
    }, [formula])
    const Validate = (obj) => {
        if(obj.answer == answer){
            props.onCorrectAnswer()
        }else{
            props.onWrongAnswer()
        }
    }
    console.log(answer);
    console.log(options);
    console.log(problem.data);
    return (
        <>
            <div className='average__question'>
                <h6>{question} <br /> {subQuestion}</h6>
            </div>
            <div className='average__gamescreen'>
                {
                    proceed == false ? (
                        <div className='average__formula'>
                            <h4>What is the formula to find the Average(mean) ?</h4>
                            <div className='average__optionsHolder'>
                                {
                                    formulas.map((_, i) => {
                                        return (
                                            <div className='average__tile' onClick={() => setFormula(_)}>
                                                <img src={_.image} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className='averageOptions'>
                            {
                                options.map((obj, idx) => {
                                    return (
                                        <div className='average__option' onClick={()=>Validate(obj)}>
                                            <img src={tile} width='100%' />
                                            <h4>{obj.answer}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Average;