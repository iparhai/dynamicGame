import React, { useState, useEffect } from 'react';
import problemGenerator from './problemGenerator';
import Tile_bg from './images/tile.png';

import './Tyf.css'


export default function TypeOfFraction(props) {
    const [problem,setProblem] = React.useState(problemGenerator.generate());

    const Nindex = Math.floor(Math.random()*problem.numerator.length);
    const Dindex = Math.floor(Math.random()*problem.denominator.length);

    const [numerator, setNumerator] = useState(problem.numerator[Nindex]);
    const [denominator, setDenominator] = useState(problem.denominator[Dindex]);
    
    const [whole_u,setWhole_u] = useState([]);
    const [remainder_u,setRemainder_u] = useState([]);
    const [den_u,setDen_u] = useState([]);
    
    const [background1,setBackground1] = useState();
    const [background2,setBackground2] = useState();
    const [background3,setBackground3] = useState();

    // const [whole,setWhole] = useState([]);
    const [click, setClick] = useState('');
    const userTiles = [{ num: 0 }, { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }];


    const [evaluate,setEvaluate] = useState(0);

    function fraction() {
        const whole = Math.floor(numerator / denominator);
        const remainder = Math.floor(numerator % denominator);
        const resultant = { w: 0, r: 0, d: 0 };
        if (whole != 0) {
            resultant.w = whole;
            resultant.r = remainder;
            resultant.d = denominator;
        } else {
            resultant.w = 0;
            resultant.r = 0;
            resultant.d = 0;
        }
        return resultant;
    }
    const wholeFraction = fraction();
    const bg1 = {
        border : '4px dotted greenyellow',
        height : '32%',
        width : '32%',
        backgroundColor :  'rgba(172, 255, 47, 0.308)'
    }
    const bg2 = {
        border : '4px dotted white'
    }
    const bg3 = {
        border : '4px dotted white'
    }
    const TilesCSS = {
        border: '1px solid greenyellow',
        // backgroundColor: 'greenyellow',
        backgroundImage : `url(${Tile_bg})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        borderRadius: '10px',
        height: '22%',
        width: '20%',
        // lineHeight : '10%'
        color: 'white',
        animation: 'float 5s ease-in-out infinite'
    }

    const AddNumber = (obj, idx) => {
        if(click == 'w'){
            setWhole_u([...whole_u,obj.num]);
        }
        else if(click == 'r'){
            setRemainder_u([...remainder_u,obj.num])
        }
        else if(click == 'd'){
            setDen_u([...den_u,obj.num])
        }
    }
    const Close = (idx) => {
        if(click == 'w'){
            setWhole_u(whole_u.slice(0, idx).concat(whole_u.slice(idx + 1)));
        }
        else if(click == 'r'){
            setRemainder_u(remainder_u.slice(0, idx).concat(remainder_u.slice(idx + 1)));
        }
        else if(click == 'd'){
            setDen_u(den_u.slice(0, idx).concat(den_u.slice(idx + 1)));
        }
    } 
    
    useEffect(()=>{
        if(whole_u.length > 3){
            setWhole_u([0]);
        }else if(remainder_u.length > 3){
            setRemainder_u([0]);
        }else if(den_u.length > 3){
            setDen_u([0]);
        }
    },[whole_u,remainder_u,den_u]);

    useEffect(()=>{
       if(evaluate > 0){
           if((whole_u.toString() == wholeFraction.w)&&(remainder_u.toString() == wholeFraction.r)&&(den_u.toString() == wholeFraction.d)){
            props.onCorrectAnswer();
           }else{
            props.onWrongAnswer();
           }
       }
    },[evaluate]);

    return (
        <div>
            <div className='Tyf_Question'>
                <h6>{problem.question_part1} {numerator} by {denominator} {problem.question_part2}</h6>
            </div>
            <div className='Tyf_SolveProblem'>
                <div className='solver'>
                    <div className='board1' style={background1}
                            onClick={() =>{
                                setBackground1(bg1)
                                setBackground2(bg2)
                                setBackground3(bg3)
                                setClick('w')
                                }}>
                        {
                            whole_u.map((obj,idx)=>{
                                return(
                                    <h1 onClick={()=>Close(idx)}>{obj}</h1>
                                )
                            })
                        }
                    </div>
                    <div className='board2' style={background2}
                        onClick={() => {
                            setBackground1(bg2)
                            setBackground2(bg1)
                            setBackground3(bg3)
                            setClick('r')
                            }}>
                        {
                            remainder_u.map((obj,idx)=>{
                                return(
                                    <h1 onClick={()=>Close(idx)}>{obj}</h1>
                                )
                            })
                        }
                    </div>
                    <hr className='hrLine'/>
                    <div className='board3' style={background3}
                        onClick={() => {
                            setBackground1(bg2)
                            setBackground2(bg3)
                            setBackground3(bg1)
                            setClick('d')
                            }}>
                        {
                            den_u.map((obj,idx)=>{
                                return(
                                    <h1 onClick={()=>Close(idx)}>{obj}</h1>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='tiles'>
                    {
                        userTiles.map((obj, idx) => {
                            return (
                                <div style={TilesCSS} onClick={() => AddNumber(obj, idx)}>
                                    <h4>{obj.num}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='checkDiv' onClick={()=>setEvaluate(evaluate+1)}>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    )
}
