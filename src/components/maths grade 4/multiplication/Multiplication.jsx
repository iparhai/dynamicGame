import React, { useEffect } from 'react'
import getAsset from '../../../utils/getAsset'
import Chase from '../../gameType/Chase/Chase'
import problemGenerator from './problemGenerator'
import './multiplication.css'
const button = getAsset.getObjectByProperty("button|option|n")
export default function ({ onCorrectAnswer, onWrongAnswer }) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const [options, setOptions] = React.useState(problemGenerator.getOptions(problem.answer))
    const [correct, setCorrect] = React.useState(null)
    const handleOptionClick = (option) => {
        if (option == problem.answer) {
            setCorrect(true)
        }
        else {
            setCorrect(false)
        }
        setProblem(problemGenerator.generate())

    }
    useEffect(() => {
        setOptions(problemGenerator.getOptions(problem.answer))
        setCorrect(null)
    }, [problem])
    return (
        <div style={{ width: "100vw", height: "100vh" }} className="fade">

            <div class="main-container">
                <div class="road"></div>
                <div class="road-sideview"></div>
            </div>

            <div className="thought_4" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            <div className='options'>
                {
                    options.map((item, index) => {
                        return (
                            <div className='multi_container' onClick={() => { handleOptionClick(item) }}>
                                <img src={button} className='multi_box' />
                                <div className='multi_centered' style={{ "pointer-events": "none" }}> {item} </div>
                            </div>
                        )
                    })
                }
            </div>
            <Chase correct={correct} OnRight={() => onCorrectAnswer()} onWrong={() => onWrongAnswer()} />
        </div>
    )
}
