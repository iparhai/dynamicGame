import React , {useEffect} from 'react';
import problemGenerator from './problemGenerator';
import getURLParams from '../../../utils/getURLParams';

import cloud from './images/cloud.png';
import sky from './images/sky.jpg';
import option from './images/optionNum.png';
import './dtf.css';


const dif = getURLParams.dif;

function DTF(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate);
    const [fraction, setFraction] = React.useState(problem.fraction);
    const [decimal, setDecimal] = React.useState(fraction.decimal);
    const [options, setOptions] = React.useState([
        0,1, 2, 3, 4, 5, 6, 7, 8, 9, '.'  
    ])

    const [userAnswer, setUserAnswer] = React.useState([]);
    const [finalAns, setFinalAns] = React.useState('');

    useEffect(()=>{
        let string = userAnswer.join('');
        console.log(string);
        setFinalAns(string);
    },[userAnswer])

    const Evaluate = () => {
        if(finalAns == fraction.decimal){
            // alert('Right')
            props.onCorrectAnswer();
        }else{
            // alert('Wrong')
            props.onWrongAnswer();
        }
    }

    return (
        <>
            <div className='dtf__question'>
                <h6>Write the fractions as decimal number</h6>
            </div>
            <div className='dtf__display'>
                <div className='dtf__holder'>
                    {
                            <>
                            <div><h1>{fraction.numerator}</h1></div>
                            <hr />
                            <div><h1>{fraction.denominator}</h1></div>
                            </>
                    }
                </div>
                <div className='dtf__equal'>
                    <h1>=</h1>
                </div>
                <div type='text' className='dtf__input'>
                    {
                        <h6>{finalAns}</h6>
                    }
                </div>
                <i
                    className='fa fa-paper-plane'
                    onClick = {()=>Evaluate()}
                    style={{
                        color : '#5052b2',
                        position : 'absolute',
                        top : '50%',
                        left : '80%', 
                    }}
                ></i>
                <i
                    className='fa fa-trash-o'
                    onClick = {()=>setUserAnswer([])}
                    style={{
                        color : '#5052b2',
                        position : 'absolute',
                        top : '38%',
                        left : '80%', 
                    }}
                ></i>
            </div>
            <div className='dtf__optionsHolder'>
                {
                    options.map((obj) => {
                        return (
                            <div
                                className='dtf__opt'
                                onClick = {()=>setUserAnswer([...userAnswer , obj])}
                            >
                                <img src={option} width='100%' />
                                <h1>{obj}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DTF
