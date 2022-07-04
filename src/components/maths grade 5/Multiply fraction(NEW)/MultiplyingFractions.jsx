import React, { useState , useEffect } from 'react';
import problemGenerator from './problemGenerator';

import option from '../images/options.png';

import './style.css';

function MultiplyingFractions(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [fraction1, setFraction1] = useState(problem.generatedfraction1);
    const [fraction2, setFraction2] = useState(problem.generatedfraction2);
    const [answer, setAnswer] = useState(problem.answer);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        let anyRandom = parseInt(Math.random()+20);
        let opt = Array(3).fill().map(()=>{return {numerator : parseInt(Math.random()*20) , denominator : parseInt(Math.random()*20) , status : false}});
        opt.push({numerator : answer.numerator , denominator : answer.denominator , status : true})
        setOptions(opt.sort(() => Math.random() - 0.5));
    }, [])

    const Evaluate = (o) => {
        if(o.status == true){
            props.onCorrectAnswer()
        }else{
            props.onWrongAnswer()
        }
    }

    // console.log(options);
    
    return (
        <>
            <div className='dtf__question'>
                <h6>{question}</h6>
            </div>
            <div className='dtf__display'>
                <div className='dtf__holder'>
                    {
                        <>
                            <div><h1>{fraction1.numerator}</h1></div>
                            <hr />
                            <div><h1>{fraction1.denominator}</h1></div>
                        </>
                    }
                </div>
                <div className='dtf__equal'>
                    <h1>x</h1>
                </div>
                <div className='dtf__holder rightMost'>
                    {
                        <>
                            <div><h1>{fraction2.numerator}</h1></div>
                            <hr />
                            <div><h1>{fraction2.denominator}</h1></div>
                        </>
                    }
                </div>
                <div className='dtf__equal nextEqual'>
                    <h1>=</h1>
                </div>
                <div className='dtf__equal questionMark'>
                    <h1>?</h1>
                </div>
            </div>
            <div className='Geometry__Options'>
				{
					options.map((o, i) => {
						return (
							<div className='opt1' onClick={()=>Evaluate(o)}>
								<img src={option} width='100%' />
                                <h6>{o.numerator}/{o.denominator}</h6>
							</div>
						)
					})
				}
			</div>
        </>
    )
}

export default MultiplyingFractions
