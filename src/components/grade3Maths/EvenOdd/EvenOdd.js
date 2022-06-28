import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import Movable from './Movable';
import Rocket from './Rocket';
import Balloons from './Balloons';
import Positions from './Positions';

import './EvenOdd.css';
import btn_up from './images/btn-01.png';
import btn_down from './images/down-01.png';
import btn_shoot from './images/shoot-01.png';
import questionIcon from './images/question-01.png';
import cross from './images/cross-01.png';

function EvenOdd(props){
    const [problem,setProblem] = React.useState(problemGenerator.generate());
    const [choice,setChoice] = useState(Math.floor(Math.random()*problem.choice.length));
    const [quesShow,setquesShow] = useState(true);
    const [up,setUp] =  useState(1);
    const [release,setRelease] = useState(0);
    const [answer,setAnswer] = useState(0);

    const [pos,setPos] = useState(Positions);
    
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        setHintState(`Hit the ${problem.choice} by moving the space ship`)
    });

    useEffect(()=>{
        if(up>100){
            setUp(1)
            setAnswer(0)
        }else if(up<0){
            setUp(1)
            setAnswer(0)
        }
    },[up])

    const GoDown = () => {
        setUp(up+10);
        setAnswer(answer+1);
    }

    const GoUp = () => {
        setUp(up-10);
        setAnswer(answer-1);
    }
    
    const Hit = () => {
        setRelease(release+90);
    }
    
    useEffect(()=>{
        setTimeout(() =>{
        if(answer>=0 && release>80){
            if(((answer+1)%2==0)&&(problem.choice[choice]=='even')){
                // alert('Even Number');
                props.onCorrectAnswer();
            }
            else if(((answer+1)%2==1)&&(problem.choice[choice]=='odd')){
                props.onCorrectAnswer();
            }
            else{
                props.onWrongAnswer();
            }
        setRelease(0);
        }
        }, 2000)},[answer,release]);    

    console.log(answer);
    console.log(up);
    return(
        <div className='gameScreen'>
            <div className={quesShow?'q1 q1show':'q1 q1hide'}>
                {problem.question+ " which is " + problem.choice[choice] } 
            </div>
            <Movable Key={1} Coord={up} />
            <Rocket Key={2} Coord={up} Release={release} />

            {
                pos.map((obj,idx)=>{
                    return(
                        <Balloons
                        Key={idx}
                        // B_Number={obj.num}
                        B_Number={problem.number[idx]}
                        Top={obj.top}
                        Left={obj.left}
                        Release={release}
                        />
                    )
                })
            }
            <img src={btn_up} className='up_btn' onClick={()=>setUp(up-10)} />
            <img src={btn_down} className='down_btn' onClick={()=>GoDown()} />
            <img src={btn_shoot} className='shoot_btn' onClick={()=>Hit()} />
            {
                quesShow?
                <img src={questionIcon} style={{}} className='q_btn' onClick={()=>setquesShow(false)} />
                :
                <img src={cross} style={{}} className='q_btn' onClick={()=>setquesShow(true)} />
            }
        </div>
    );
}

export default EvenOdd;