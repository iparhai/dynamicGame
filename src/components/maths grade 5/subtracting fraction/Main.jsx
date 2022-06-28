import React, { useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import { useDrop } from "react-dnd";
import getURLParams from '../../../utils/getURLParams';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import Dragjaws from './Dragjaws';
import './main.css';
import Bricks from './images/teeth-patterns-bricks.png';
import Bubbles from './images/teeth-patterns-bubbles.png';
import Gold from './images/teeth-patterns-gold.png';
import Toothpaste from './images/teeth-patterns-toothpaste.png';
import plus_btn from './images/increment.png';
import JawsImage from './images/jaws.gif';

function Main(props) {
    const [problem,setProblem] = useState(problemGenerator.generate());
    const [question, setQuestion] = useState(problem.question);
    const [computedAnswer, setComputedAnswer] = useState(problem.answer);
    const [operator, setOperator] = useState('');
    const [upperJaw, setUpperJaw] = useState([]);
    const [lowerJaw, setLowerJaw] = useState([]);
    const [pattern, setPattern] = useState([Bricks, Bubbles, Gold, Toothpaste]);
    const [bg,setBg] = useState([]);

    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        const hintText = {
            e : `Subtract the fraction ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} from ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator}`,
            u : `${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} کو ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} سے گھٹائیں`,
            a : `اطرح الكسر ${problem.generatedfraction2.numerator} / ${problem.generatedfraction2.denominator} من ${problem.generatedfraction1.numerator} / ${problem.generatedfraction1.denominator}`,
            p : `برخه ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} له ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} څخه کم کړئ`,
            k : `${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} 에서 분수 ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} 빼기`
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
    const Validate = () => {
        if((computedAnswer.numerator == (operator+upperJaw.length))&&(computedAnswer.denominator==lowerJaw.length)){
            props.onCorrectAnswer();
        }
        else{
            props.onWrongAnswer();
        }
    }
    console.log(computedAnswer)
    return (
        <div className='subCartoon' style={{backgroundImage: `url(${problem.background})`}}>
            <div className='showQuestion'>
                <h5>{question}</h5>
            </div>
            <div className='question1'>
                <h5 className='underline'>{problem.generatedfraction1.numerator}</h5>
                <h5>{problem.generatedfraction1.denominator}</h5>
            </div>
            <div className='question2'>
                <h5 className='underline'>{problem.generatedfraction2.numerator}</h5>
                <h5>{problem.generatedfraction2.denominator}</h5>
            </div>

            <div className='Hint1'>
                <div>{problem.generatedfraction1.denominator}</div>
                <div>{problem.generatedfraction2.denominator}</div>
            </div>
            <div className='Hint2'>
                <div>{problem.generatedfraction1.denominator*2}</div>
                <div>{problem.generatedfraction2.denominator*2}</div>
            </div>
            <div className='Hint3'>
                <div>{problem.generatedfraction1.denominator*3}</div>
                <div>{problem.generatedfraction2.denominator*3}</div>
            </div>
            <div className='Hint4'>
                <div>{problem.generatedfraction1.denominator*4}</div>
                <div>{problem.generatedfraction2.denominator*4}</div>
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

            <div
                className='plus-operator'
                onClick={()=>setOperator('+')} 
            >
                <i style= {{opacity : operator == '-' ? '0.4' : '1'}} className='fa fa-plus'></i>
            </div>
            <div
                className='minus-operator'
                onClick={()=>setOperator('-')}
            >
                <i style = {{opacity : operator == '+' ? '0.4' : '1' }} className='fa fa-minus'></i>
            </div>
            <div className='checkAnswer'>
                <i className='fa fa-paper-plane' onClick={()=>Validate()}></i>
            </div>
        </div>
    )
}

export default Main;