import React, { useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import getURLParams from '../../../utils/getURLParams';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import './main.css';
import Bricks from './images/teeth-patterns-bricks.png';
import Bubbles from './images/teeth-patterns-bubbles.png';
import Gold from './images/teeth-patterns-gold.png';
import Toothpaste from './images/teeth-patterns-toothpaste.png';
import plus_btn from './images/increment.png';

function Main(props) {
    const [problem,setProblem] = React.useState(problemGenerator.generate());
    const [question, setQuestion] = React.useState(problem.question);
    const [computedAnswer, setComputedAnswer] = React.useState(problem.answer);

    const [fraction1 , setFraction1] = React.useState(problem.generatedfraction1);
    const [fraction2 , setFraction2] = React.useState(problem.generatedfraction2);
    const [upperJaw, setUpperJaw] = useState([]);
    const [lowerJaw, setLowerJaw] = useState([]);
    const [pattern, setPattern] = useState([Bricks, Bubbles, Gold, Toothpaste]);
    const [bg,setBg] = useState([]);

    const num = upperJaw.length;
    const den = lowerJaw.length;
    const userAnswer = {
        numerator : num,
        denominator : den
    };
    
    
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        const hintText = {
            e: `Add the fraction ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} with ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator}`,
            u: `حصہ ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} کو ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} کے ساتھ شامل کریں`,
            a: `أضف الكسر ${problem.generatedfraction1.numerator} / ${problem.generatedfraction1.denominator} مع ${problem.generatedfraction2.numerator} / ${problem.generatedfraction2.denominator}`,
            p: `برخه ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} د ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} سره اضافه کړئ`,
            k: `분수 ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} 를 ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} 와 함께 추가`
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
        } else {
            hT = hintText.e
        } 
        setHintState(hT)
    });

    const Addteeth = () => {
        setUpperJaw([...upperJaw, { number: '' }]);
        setLowerJaw([...lowerJaw, { number: '' }]);
    }
    const choosePattern = (obj, idx) => {
        setBg({...bg, pattern: obj});
    }
    const bgStyle = {
        backgroundImage: `url(${bg.pattern})`,
        backgroundSize : 'cover', 
        backgroundRepeat : 'no-repeat'
    }
    
    const PopUpperteeth = (obj,idx) => {
        setUpperJaw(upperJaw.slice(0, idx).concat(upperJaw.slice(idx + 1)));
    }
    const Poplowerteeth = (obj,idx) => {
        setLowerJaw(lowerJaw.slice(0,idx).concat(lowerJaw.slice(idx + 1)));
    }
    const Validate = () => {
        if((userAnswer.numerator == computedAnswer.numerator)&&(userAnswer.denominator == computedAnswer.denominator)){
            props.onCorrectAnswer();
        }else{
            props.onWrongAnswer();
        }
    }
    return (
        <div className='addCartoon' style={{backgroundImage: `url(${problem.background})`}}>
            <div className='showQuestion'>
                <h5>{question}</h5>
            </div>
            <div className='question1'>
                <h5 className='underline'>{fraction1.numerator}</h5>
                <h5>{fraction1.denominator}</h5>
            </div>
            <div className='question2'>
                <h5 className='underline'>{fraction2.numerator}</h5>
                <h5>{fraction2.denominator}</h5>
            </div>
            <div className='Hint1'>
                <div>{fraction1.denominator}</div>
                <div>{fraction2.denominator}</div>
            </div>
            <div className='Hint2'>
                <div>{fraction1.denominator*2}</div>
                <div>{fraction2.denominator*2}</div>
            </div>
            <div className='Hint3'>
                <div>{fraction1.denominator*3}</div>
                <div>{fraction2.denominator*3}</div>
            </div>
            <div className='Hint4'>
                <div>{fraction1.denominator*4}</div>
                <div>{fraction2.denominator*4}</div>
            </div>
            <div className='upperJaw' contentEditable={false} data-text="Numerator here...">
                {                    
                    upperJaw.map((obj, idx) => {
                        return <div className='teeths1' style={bgStyle} onClick={()=>PopUpperteeth(obj,idx)}></div>
                    })
                }
            </div>
            <div className='UpperjawValue'>
                <h6>{upperJaw.length}</h6>
            </div>
            <div className='lowerJaw' contentEditable={false} data-text="Denominator here...">
                {
                    lowerJaw.map((obj, idx) => {
                        return <div className='teeths2' style={bgStyle} onClick={()=>Poplowerteeth(obj,idx)}></div>
                    })
                }
            </div>
            <div className='LowerjawValue'>
                <h6>{lowerJaw.length}</h6>
            </div>
            <div className='color-of-teeth'>
                {
                    pattern.map((obj, idx) => {
                        return <img src={obj} style={{ border: bg.pattern == obj ?'3px solid green  ' : '',transform: bg.pattern == obj ? 'scale(0.98)':''}} width='80%' onClick={()=>choosePattern(obj,idx)} />
                    })
                }
            </div>

            <div className='Dentures'>
                <img src={plus_btn} onClick={() =>  Addteeth()} />
                {/* <img src={plus_btn} onClick={()=>setLowerJaw([...lowerJaw,{dummy:''}])} /> */}
            </div>
            <div className='checkAnswer'>
                <i className='fa fa-paper-plane' onClick={()=>Validate()}></i>
            </div>
        </div>
    )
}

export default Main;