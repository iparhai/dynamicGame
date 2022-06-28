import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import getURLParams from '../../../utils/getURLParams';

import './Divfrac.css';
import Cloud from './images/cloud.png';

function Divfrac(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [options, setOptions] = useState(problem.options);
    const [choose, setChoose] = useState({});
    const [hintState, setHintState] = useContext(GlobalState);

    const answer = {
        num: problem.answer.numerator,
        den: problem.answer.denominator
    };
    const [show, setShow] = useState('');

    const Evaluate = (obj, idx) => {
        setChoose(obj);
        setShow('a')
    }

    useEffect(() => {
        if (show == 'a') {
            if (choose.numerator == answer.num && choose.denominator == answer.den)
                props.onCorrectAnswer()
            else
                props.onWrongAnswer()
        }
    }, [show, choose])

    useEffect(() => {
        const hintText = {
            e: `Divide the fraction ${problem.fraction2.num}/${problem.fraction2.den} with ${problem.fraction1.num}/${problem.fraction1.den}`,
            u: `کسر ${problem.fraction2.num}/${problem.fraction2.den} کو ${problem.fraction1.num}/${problem.fraction1.den} سے تقسیم کریں۔`,
            a: `اقسم الكسر ${problem.fraction2.num} / ${problem.fraction2.den} على ${problem.fraction1.num} / ${problem.fraction1.den}`,
            p: `${problem.fraction2.num}/${problem.fraction2.den} د ${problem.fraction1.num}/${problem.fraction1.den} سره تقسیم کړئ`,
            k: `분수 ${problem.fraction2.num}/${problem.fraction2.den}을 ${problem.fraction1.num}/${problem.fraction1.den}으로 나눕니다.`
        }
        let hT;
        if (getURLParams.lang == "a") {
            hT = hintText.a
        } else if (getURLParams.lang == "u") {
            hT = hintText.u
        } else if (getURLParams.lang == "p") {
            hT = hintText.p
        } else if (getURLParams.lang == 'k') {
            hT = hintText.k
        } else {
            hT = hintText.e
        }
        setHintState(hT)
    });
    console.log(choose)
    console.log(answer)
    return (
        <div className='DivFrac-holder'>
            <div className='question-holder'>
                <h6>{question}</h6>
            </div>
            <div className='option-holder-clouds'>
                {
                    options.map((obj, idx) => {
                        return (
                            <div
                                className='opt'
                                onClick={() => Evaluate(obj, idx)}>
                                <img src={Cloud} width='100%' />
                                <div
                                    style={{
                                        width: '25%',
                                        position: 'absolute',
                                        top: '18%',
                                        left: '40%',
                                        color: '#0d6efd',
                                    }}
                                >
                                    <h1 style={{ fontSize: '100%' }}>{obj.numerator}</h1>
                                    <hr style={{ border: '2px solid #0d6efd', backgroundColor: '#0d6efd', margin: '0px' }} />
                                    <h1 style={{ fontSize: '100%' }}>{obj.denominator}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Divfrac;