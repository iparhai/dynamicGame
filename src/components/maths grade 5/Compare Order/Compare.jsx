import React, { useState, useEffect, useCallback } from 'react';
import problemGenerator from './problemGenerator';
import {$} from 'jquery'
import Items from './Items';
import './style.css'
import DragonHead from './images/head@2.png';
import DragonTail from './images/tail@2.png';
import FilledSegment from './images/segment@2.png';
import OutlinedSegment from './images/segment-outline@2.png';


export default function CON(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [data, setData] = useState(problem.data.data);
    const [option, setOption] = useState(problem.options);
    const [execute, setExecute] = useState(false)

    const handleClick = (o) => {
        const updatedArray = [...data];
        const whereTo = problem.data.index;

        updatedArray[whereTo].number = o.number;
        updatedArray[whereTo].display = 'visible';
        setData(updatedArray);
        setExecute(!execute)
    }

    useEffect(() => {

        if (execute == true){
            // console.log('Method Executed')

            let status = data.every(isSequential);

            function isSequential(el,idx,array){
                if(idx === 0)
                    return true
                else
                    console.log(el.number)
                    console.log(array[idx-1].number);
                    return (array[idx-1].number < el.number+1)
            }
            
            setTimeout(() => {
                if(status==true)
                    // alert('Right Answer')
                    props.onCorrectAnswer()
                else
                    // alert('Wrong Answer')
                    props.onWrongAnswer()
            }, 1000);
        }
    }, [execute])

    // console.log(execute)

    return (
        <>
            <div className='CON__question'>
                <h6>{problem.question}</h6>
            </div>
            <div className='CON__main'>
                <div className='CON__dragonHead'>
                    <img src={DragonHead} width='100%' />
                </div>
                {
                    data.map((el, idx) => {
                        return (
                            <div className='CON__dragonSegments'>
                                <img
                                    src={el.display == 'visible' ? FilledSegment : OutlinedSegment}
                                    width='100%'
                                />
                                <h1 style={{ visibility: el.display == 'visible' ? 'visible' : 'hidden' }}>{el.number}</h1>
                            </div>
                        )
                    })
                }
                <div className='CON__dragonHead' id='tail'>
                    <img src={DragonTail} width='100%' />
                </div>
            </div>
            <div className='CON__options' style={{pointerEvents : execute==true?'none':'auto' , opacity : execute==true? '0.5':'' }}>
                {
                    option.map((obj, idx) => {
                        return (
                            <Items
                                number={obj.number}
                                clicked={() => handleClick(obj)}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
