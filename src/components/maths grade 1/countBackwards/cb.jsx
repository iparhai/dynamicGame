import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import getAsset from '../../../utils/getAsset';
import problemGenerator from './problemGenerator';
import './cb.css'
import NumberLineMove from '../../gameType/move/NumberLineMove';
//n for no gender
const numberLine = getAsset.getObjectByProperty("numberLine|1|n")
const objectList = {
    numberLine: numberLine,
    more: getAsset.getObjectByProperty("button|arrow|right|static|n"),
    less: getAsset.getObjectByProperty("button|arrow|left|static|n"),
    movingFish_R: getAsset.getObjectByProperty("numberLine|move|right"),
    movingFish_L: getAsset.getObjectByProperty("numberLine|move|left")
}
export default function Cb(props) {
    const style = {
        border: '1px dashed gray',
        padding: '1rem 1.5rem',
        marginBottom: '.5rem',
        marginRight: ".25rem",
        borderRadius: "50%",
        backgroundColor: 'black',
        transitionDuration: "0.5s",
        cursor: 'move',
    };

    const [problem, setProblem] = useState(problemGenerator.generateProblem())
    const [ans, setAns] = useState(null)
    const [attemptedAns, setAttemptedAns] = useState(null)
    const [options, setOptions] = useState(null)
    const [pad, setPad] = useState(null)
    const [tappedBoxId, setTappedBoxId] = useState(null)

    useEffect(() => {
        // setProblem(problemGenerator.generateProblem())
    }, [])
    useEffect(() => {
        if (problem.question == null || problem.number == null) return
        setAns(problemGenerator.getAnswer())
    }, [problem])

    useEffect(() => {
        if (ans == null) return
        // console.log(ans)
        setOptions(problemGenerator.getOption(ans))
    }, [ans])
    useEffect(() => {
        if (options == null) return
        // console.log(options)
    }, [options])
    const handleSubmit = () => {
        if (ans == attemptedAns) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div className="fade">
            <div>
                <div className="thought" style={{ color: "white" }}>
                    <h5 >
                        {problem.question}
                    </h5>
                </div>
            </div>

            <div style={{ marginTop: "40vh" }}>
                <NumberLineMove objects={objectList} incCount={() => {
                    setAttemptedAns(attemptedAns + 1)
                }} decCount={() => {
                    setAttemptedAns(attemptedAns - 1)
                }} />
            </div>
            <button className="App-link" style={{
                background: "rgb(49 205 97)",
                border: "1px solid #057897",
                borderRadius: "0.6em",
                position: "absolute",
                top: "70%"
            }} onClick={handleSubmit}><i class="fa fa-paper-plane 3x" aria-hidden="true"></i></button>

            {/* 
            <div style={{ display: "flex" }}>
                {options && options.map((option, idx) => {
                    return (
                        <div >
                            <img src={object} className="woodBox" />
                            <div style={{marginTop:"40vh", marginRight: "10px" }} onClick={() => {
                                if (option == ans) {
                                    props.onCorrectAnswer()
                                }
                                else {
                                    props.onWrongAnswer()
                                }
                            }}>
                                <strong>{option}</strong>
                            </div>
                        </div>
                    )
                })}
            </div> */}

        </div >
    )
}
