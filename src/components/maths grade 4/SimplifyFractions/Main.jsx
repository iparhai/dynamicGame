import React, { useState, useEffect, useContext} from 'react';
import {fraction} from 'mathjs'
import { useDrop } from "react-dnd";
import problemGenerator from './problemGenerator';
import getURLParams from "../../../utils/getURLParams";
import GlobalState from '../../HintsContext';
import Dragjaws from './Dragjaws';
import Bricks from './images/teeth-patterns-bricks.png';
import Bubbles from './images/teeth-patterns-bubbles.png';
import Gold from './images/teeth-patterns-gold.png';
import Toothpaste from './images/teeth-patterns-toothpaste.png';
import plus_btn from './images/increment.png';
import JawsImage from './images/jaws.gif';

import './simplifyFrac.css';

function Main(props) {
    const [problem,setProblem] = React.useState(problemGenerator.generate());
    const [upperJaw, setUpperJaw] = useState([]);
    const [lowerJaw, setLowerJaw] = useState([]);
    const [pattern, setPattern] = useState([Bricks, Bubbles, Gold, Toothpaste]);
    const [bg,setBg] = useState([]);

    const Nindex = Math.floor(Math.random()*problem.numerator.length);
    const Dindex = Math.floor(Math.random()*problem.denominator.length);

    const [question,setQuestion] = useState(problem.question);
    const [qnum1,setqnum1] = useState(problem.numerator[Nindex]);
    // const [qden1,setqden1] = useState(problem.denominator[Dindex]);
    // const [qnum2,setqnum2] = useState(problem.numerator[Nindex]);
    const [qden2,setqden2] = useState(problem.denominator[Dindex]);

    const [hintState, setHintState] = useContext(GlobalState);

    const dif = getURLParams.dif;

    useEffect(() => {
        setHintState("Simplify the following fractions amd then make teeths accourding to answer")
    });

    const [jaws,setJaws] = useState([{number:5,image:JawsImage},{number:5,image:JawsImage}]);
    const [basket,setBasket] = useState([]);
    const [number,setNumber] = useState([]);
    const [basket2,setBasket2] = useState([]);
    const [number2,setNumber2] = useState([]);

    const [{ isOver1 }, dropRef1] = useDrop({
        accept: 'jaws',
        drop: (item) => setBasket((basket) =>item),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });
    const [{ isOver2 }, dropRef2] = useDrop({
        accept: 'jaws',
        drop: (item) => setBasket2((basket2) =>item),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });
    //below useEffect hoooks for upper Jaw
    useEffect(()=>{
        if(basket.length == 0){
            console.log('number is empty')
        }
        else{
            setNumber([...number,basket.number]);
        }
    },[basket]);

    useEffect(()=>{
        if(number.length==0){
            console.log('Empty')
        }
        else{
            for(let start=1;start<=number[0];start++){
                upperJaw.push('teeth'+start)
                setUpperJaw([...upperJaw])
            }
        }
    },[number]);

    //below useEffect hoooks for lower Jaw
    useEffect(()=>{
        if(basket2.length == 0){
            console.log('number is empty')
        }
        else{
            setNumber2([...number2,basket2.number]);
        }
    },[basket2]);

    useEffect(()=>{
        if(number2.length==0){
            console.log('Empty')
        }
        else{
            for(let start=1;start<=number2[0];start++){
                lowerJaw.push('teeth'+start)
                setLowerJaw([...lowerJaw])
            }
        }
    },[number2])

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


    // Code for evaluating user answer
    let computedNumerator = qnum1;
    let computedDenominator = qden2;

    const resultantFration = fraction(computedNumerator,computedDenominator);

    const Validate = () => {
        if((upperJaw.length==resultantFration.n)&&(lowerJaw.length==resultantFration.d)){
            props.onCorrectAnswer();
        }
        else{
            props.onWrongAnswer();
        }
    }

    console.log(resultantFration);
    return (
        <div className='cartoon' style={{backgroundImage: `url(${problem.background})`}}>
            <div className='showQuestion'>
                <h5>{problem.question} {qnum1} by {qden2}</h5>
            </div>
            <div className='question1'>
                <h5>{qnum1}</h5>
            </div>
            <div className='question2'>
                <h5>{qden2}</h5>
            </div>
            <div className='Hint1'>
                <div>{qden2}</div>
                <div>{qden2}</div>
            </div>
            <div className='Hint2'>
                <div>{qden2*2}</div>
                <div>{qden2*2}</div>
            </div>
            <div className='Hint3'>
                <div>{qden2*3}</div>
                <div>{qden2*3}</div>
            </div>
            <div className='Hint4'>
                <div>{qden2*4}</div>
                <div>{qden2*4}</div>
            </div>
            <div className='upperJaw' ref={dropRef1} contentEditable={false} data-text="Numerator here...">
                {                    
                    upperJaw.map((obj, idx) => {
                        return <div className='teeths1' style={bgStyle} onClick={()=>PopUpperteeth(obj,idx)}></div>
                    })
                }
            </div>
            <div className='UpperjawValue'>
                <h6>{upperJaw.length}</h6>
            </div>
            <div className='lowerJaw' ref={dropRef2} contentEditable={false} data-text="Denominator here...">
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
                {
                    jaws.map((obj,idx)=>{
                        return <Dragjaws Key={idx} number={obj.number} image={obj.image} />
                    })
                }
                {   
                    upperJaw.length >= 5 ?
                    <img src={plus_btn} onClick={() =>  Addteeth()} />
                    : 
                    ''
                }
                {/* <img src={plus_btn} onClick={()=>setLowerJaw([...lowerJaw,{dummy:''}])} /> */}
            </div>
            <div className='checkAnswer'>
                <i className='fa fa-paper-plane' onClick={()=>Validate()}></i>
            </div>
        </div>
    )
}

export default Main;