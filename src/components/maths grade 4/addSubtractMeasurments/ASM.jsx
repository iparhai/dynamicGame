import React from 'react'
import problemGenerator from './problemGenerator'
import './ASM.css'
import getAsset from '../../../utils/getAsset'

export default function ASM({ onCorrectAnswer, onWrongAnswer }) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const upperBefore = (problem.pairOfNumbers[0].beforeUnitNumber + "").split("")
    const button = getAsset.getObjectByProperty("button|option|n")
    const upperAfter = (problem.pairOfNumbers[0].afterUnitNumber + "").split("")
    const lowerBefore = (problem.pairOfNumbers[1].beforeUnitNumber + "").split("")
    const lowerAfter = (problem.pairOfNumbers[1].afterUnitNumber + "").split("")
    const numberImages = function getNumbers() {
        var arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(getAsset.getObjectByProperty("" + i + "|digit|n"))
        }
        return arr
    }()
    const handleClick = (attempt) => {
        if (attempt == problem.answer)
            onCorrectAnswer()
        else
            onWrongAnswer()
    }
    return (
        <div style={{ width: "100vw", height: "100vh" }} className="fade">

            <div className="thought_4" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            <div style={{ marginTop: "30vh" }}>
                <div style={{ marginLeft: "34vw" }}>
                    <div style={{ display: "flex" }}>
                        &nbsp;&nbsp;
                        <h2 >
                            {problem.measurementObj.beforeUnit.toLocaleUpperCase()}
                        </h2>
                        <h2 style={{ marginLeft: "16vw" }}>{problem.measurementObj.afterUnit.toLocaleUpperCase()}</h2>
                    </div>
                    <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", fontSize: "4vw" }}>
                        {/* {console.log(problem.upper.split(""))} */}
                        {upperBefore.map((ch, idx) => {
                            return (
                                <div >
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            )
                        })}
                        &nbsp; &nbsp; &nbsp;
                        {upperAfter.map((ch, idx) => {
                            return (
                                <div >
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            )
                        })}
                    </div>
                    {/* <div style={{ display: "flex" }}>
                <div>{operator}</div> */}
                    <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", paddingTop: "20px", borderBottom: "3px solid #aaa", fontSize: "4vw" }}>
                        {/* {console.log(problem.upper.split(""))} */}
                        {lowerBefore.map(ch => {
                            return (
                                <div>
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            )
                        })}
                        &nbsp; &nbsp; &nbsp;
                        {lowerAfter.map(ch => {
                            return (
                                <div>
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='asm_options'>
                {
                    problem.options.map((item, index) => {
                        return (
                            <div className='asm_container' onClick={() => { handleClick(item) }}>
                                <img src={button} className='asm_box' />
                                <div className='asm_centered' style={{ "pointer-events": "none" }}> {item} </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
