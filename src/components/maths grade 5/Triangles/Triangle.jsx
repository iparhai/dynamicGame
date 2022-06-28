import React from 'react';
import problemGenerator from './problemGenerator';
import getURLParams from '../../../utils/getURLParams';

import './Triangle.css';
import Sky from '../images/sky.jpg';
import cloud from '../images/cloud.png';
import option from '../images/options.png';



export default function Triangle(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate);
    const [question, setQuestion] = React.useState(problem.question);
    const [display, setDisplay] = React.useState(problem.display);
    const [options, setOptions] = React.useState(problem.data);

    const dif = getURLParams.dif;

    const Evaluate = (userAns) => {
        if (userAns.name == display.n) {
            props.onCorrectAnswer()
        } else {
            props.onWrongAnswer()
        }
    }



    return (
        <div className='Geometry__main'>
            <div className='Geometry__question'>
                <h6>{question}</h6>
            </div>
            <div className='Geometry__gameScreen'>
                {
                    dif == 'b' ?
                        <img src={display.i} />
                        :
                        dif == 'i' ?
                            <h6
                                style={{
                                    paddingTop: '15%',
                                    color: 'black',
                                    width: '60%',
                                    margin: '0 auto'
                                }}
                            >{display.d}</h6>
                            :
                            <h6
                                style={{
                                    paddingTop: '15%',
                                    color: 'black',
                                    width: '60%',
                                    margin: '0 auto'
                                }}
                            >{display.n}</h6>

                }
            </div>
            <div className='Geometry__Options'>
                {
                    options.map((o, i) => {
                        return (
                            <div className='opt1' onClick={() => Evaluate(o)}>
                                <img src={option} width='100%' />
                                <h6>{o.name}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
