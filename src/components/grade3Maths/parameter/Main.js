import React, { useState , useEffect , useContext } from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-dnd';
import ProblemGenerator from './ProblemGenerator';
import './parameter.css';
import miner from './images/miner.png';
import grandma from './images/grandma.gif';
import getURLParams from "../../../utils/getURLParams";
import GlobalState from '../../HintsContext';

const dif = getURLParams.dif;
const lang = getURLParams.lang;


function Main(props){
    const [problem,setProblem] = useState(ProblemGenerator.generate());
    const [goRight,setGoRight] = useState(0);
    const [goDown,setGoDown] = useState(0);
    const random = Math.floor(Math.random()*problem.lineAB.length);
    const [offset,setOffset]= useState(4);

    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        setHintState("Find the parameter")
    });
    const [numbers,setNumbers] =  useState([
        {
            line : 'A to B',
            number : problem.lineAB[random],
            style : {
                position : 'absolute',
                top : '15%',
                left : '70%',
            }
        },
        {
            line : 'B to C',
            number : dif=='b'?problem.lineAB[random]:problem.lineBC[random],
            style : {
                position : 'absolute',
                top : '50%',
                left : '96%',
            }
        },
        {
            line : 'C to D',
            number : problem.lineAB[random],
            style : {
                position : 'absolute',
                top : '92%',
                left : '70%',
            }
        },
        {
           line : 'D to A',
           number :  dif=='b'?problem.lineAB[random]:problem.lineBC[random],
           style : {
               position : 'absolute',
               top : '50%',
               left : '40%',
           }
        }
    ]);
    
    const minerTravel = {
        left : 45+goRight+'%',
        top : 24+goDown+'%',
    }
    const TR = {
        width : 4+goRight+'%',
        top: '25%',
        left: '45%',
    }
    const BR = {
        width : 4+goRight+'%',
        top: '85%',
        left: '45%'
    }
    const RD = {
        height : 5+goDown+'%',
        top: '25%',
        left: '89%'
    }
    const LD = {
        height : 4+goDown+'%',
        top: '25%',
        left: '45%'
    }
    const option1 = numbers[0].number;
    const option2 = numbers[0].number+numbers[1].number;
    const option3 = numbers[0].number+numbers[1].number+numbers[2].number+numbers[3].number;
    const option4 = numbers[0].number-1;
    const [Mcq,setMcq] = useState([{option:option1},{option:option2},{option:option3},{option:option4}]);
    
    const [answer,setAnswer] = useState();

    const Evaluate = () => {
        if(answer == numbers[0].number+numbers[1].number+numbers[2].number+numbers[3].number){
            return props.onCorrectAnswer();
        }else{
            return props.onWrongAnswer();
        }
    }
    useEffect(() => {
        if(answer>1){
            window.setTimeout(()=>{
                Evaluate()
            },3000);
        }
    }, [answer])
    
    console.log(minerTravel.top);

    if((goRight>0 && goRight<44)&&(goDown>0)){
        setGoDown(0)
    }

    return(
        <div className='Parameterboard'>
            <div className='TR' style={TR}></div>
            <div className='RD' style={RD}></div>
            <div className='BR' style={BR}></div>
            <div className='LD' style={LD}></div>
            <div
                className='miner'
                style={{left:minerTravel.left,top:minerTravel.top}}
                
            >
                <img src={miner} width='100%' />
            </div>

           
            <div className='goRight'>
                <i
                    className='fa fa-angle-double-right'
                    onClick={()=>{
                        return(
                        minerTravel.left>=RD.left?
                        '':
                        setGoRight(goRight+offset)
                        )
                    }}
                ></i>
            </div>
            <div className='goDown'>
                <i
                    className='fa fa-angle-double-down'
                    onClick={()=>{
                        return(
                            minerTravel.top>='84%'?
                            '':
                            setGoDown(goDown+4)
                        )
                    }}
                ></i>
            </div>
            {
                (minerTravel.left>=RD.left)&&(minerTravel.top>='84%')?
                    numbers.map((obj,idx)=>{
                        return(
                            <h4 className='value' style={obj.style}>{obj.number}</h4>
                        )
                    })
                :''
            }
            {
                <div className='assessment'>
                    {
                        (minerTravel.left>=RD.left)&&(minerTravel.top>='84%')?
                            <h6>{problem.question}</h6>
                        :
                        (lang=='e')?
                        <h6>Travel the distance alongside the road to unlock the question</h6>
                        :
                        <h6>سوال کا جواب دینے کے لیے راستے کے ساتھ ساتھ فاصلہ طے کریں۔</h6>
                    }
                </div>
            }
            {   
                <div className='avatar'>
                    {
                        (minerTravel.left>=RD.left)&&(minerTravel.top>='84%')?
                            <img src={grandma} />
                        :''
                    }
                </div>
            }
            {
                <div className='answerScreen'>
                    {   
                        (minerTravel.left>=RD.left)&&(minerTravel.top>='84%')?
                        Mcq.map((o, i) => {
                            return (
                                <div 
                                style={o.option==answer?{backgroundColor: '#c8d434'}:{backgroundColor: '#21c6f8'} } 
                                onClick={()=>setAnswer(o.option)}>
                                    {o.option}
                                </div>
                            )
                        }):''
                    }
                </div>
            }
           
        </div>
    )
}

export default Main;