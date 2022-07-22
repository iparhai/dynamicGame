import React, { useState, useEffect, useCallback } from 'react';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';
import getURLParams from "../../../utils/getURLParams";
import { $ } from 'jquery'
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
    const [execute, setExecute] = useState(false);



    const [hintState, setHintState] = React.useContext(GlobalState);
    useEffect(() => {
        const hintText = {
            e: `Finish my body to make a sequence`,
            a: `أنهي جسدي لعمل تسلسل`,
            p: `زما بدن بشپړ کړئ ترڅو یو ترتیب جوړ کړم`,
            u: `ایک ترتیب بنانے کے لئے میرے جسم کو ختم کریں۔`,
            k: `내 몸을 완성해 시퀀스를 만들어`
        }
        let hT;
        if (getURLParams.lang == "a") {
            hT = hintText.a
        } else if (getURLParams.lang == "u") {
            hT = hintText.u
        } else if (getURLParams.lang == "p") {
            hT = hintText.p
        } else if (getURLParams.lang == 'k') {
            hT = hintText.k
        }
        else {
            hT = hintText.e
        }
        setHintState(hT)
        // setBoard(getAsset.getObjectByProperty("board|n"))
    }, [])


    const handleClick = (o) => {
        const updatedArray = [...data];
        const whereTo = problem.data.index;

        updatedArray[whereTo].number = o.number;
        updatedArray[whereTo].display = 'visible';
        setData(updatedArray);
        setExecute(!execute)
    }

    useEffect(() => {

        if (execute == true) {
            // console.log('Method Executed')

            let status = data.every(isSequential);

            function isSequential(el, idx, array) {
                if (idx === 0)
                    return true
                else
                    console.log(el.number)
                console.log(array[idx - 1].number);
                return (array[idx - 1].number < el.number + 1)
            }

            setTimeout(() => {
                if (status == true)
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
            <div className='CON__options' style={{ pointerEvents: execute == true ? 'none' : 'auto', opacity: execute == true ? '0.5' : '' }}>
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
