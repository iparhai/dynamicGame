import React, { useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import './main.css';
import Bricks from './images/teeth-patterns-bricks.png';
import Bubbles from './images/teeth-patterns-bubbles.png';
import Gold from './images/teeth-patterns-gold.png';
import Toothpaste from './images/teeth-patterns-toothpaste.png';
import plus_btn from './images/increment.png';
import minus_btn from './images/decrement.png';

function Main(props) {
    const [problem,setProblem] = React.useState(problemGenerator.generate());
    const [upperJaw, setUpperJaw] = useState([]);
    const [lowerJaw, setLowerJaw] = useState([]);
    const [pattern, setPattern] = useState([Bricks, Bubbles, Gold, Toothpaste]);
    const [bg,setBg] = useState([]);
    // const [numerator1,setNumerator1] = useState([])
    const Nindex = Math.floor(Math.random()*problem.numerator.length);
    const Dindex = Math.floor(Math.random()*problem.denominator.length);

    const [question,setQuestion] = useState(problem.question);
    const [qnum1,setqnum1] = useState(problem.numerator[Nindex]+4);
    const [qden1,setqden1] = useState(problem.denominator[Dindex]);
    const [qnum2,setqnum2] = useState(problem.numerator[Nindex]);
    const [qden2,setqden2] = useState(problem.denominator[Dindex]);
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        setHintState("sum the fraction shown and then make  teeeths according to answer")
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
        if(((qnum1+qnum2)==upperJaw.length)&&(qden2==lowerJaw.length)){
            props.onCorrectAnswer();
        }
        else{
            props.onWrongAnswer();
        }
    }
    console.log(problem);
    
    return (
        <div className='addCartoon' style={{backgroundImage: `url(${problem.background})`}}>
            <div className='showQuestion'>
                <h5>Add the fraction {qnum1} by {qden1} with {qnum2} by {qden2}</h5>
            </div>
            <div className='question1'>
                <h5 className='underline'>{qnum1}</h5>
                <h5>{qden1}</h5>
            </div>
            <div className='question2'>
                <h5 className='underline'>{qnum2}</h5>
                <h5>{qden2}</h5>
            </div>
            <div className='Hint1'>
                <div>{qden1}</div>
                <div>{qden2}</div>
            </div>
            <div className='Hint2'>
                <div>{qden1*2}</div>
                <div>{qden2*2}</div>
            </div>
            <div className='Hint3'>
                <div>{qden1*3}</div>
                <div>{qden2*3}</div>
            </div>
            <div className='Hint4'>
                <div>{qden1*4}</div>
                <div>{qden2*4}</div>
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