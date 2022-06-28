import React from 'react'
import problemGenerator from './problemGenerator'
import './AST.css'
import getAsset from '../../../utils/getAsset'

export default function AST({ onCorrectAnswer, onWrongAnswer }) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const upperBefore = (problem.times[0].numberBefore + "").split("")
    const button = getAsset.getObjectByProperty("button|option|n")
    const upperAfter = (problem.times[0].numberAfter + "").split("")
    const lowerBefore = (problem.times[1].numberBefore + "").split("")
    const lowerAfter = (problem.times[1].numberAfter + "").split("")
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
                            {problem.timeObj.beforeUnit.toLocaleUpperCase()}
                        </h2>
                        <h2 style={{ marginLeft: "16vw" }}>{problem.timeObj.afterUnit.toLocaleUpperCase()}</h2>
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
            <div className='ast_options'>
                {
                    problem.options.map((item, index) => {
                        return (
                            <div className='ast_container' onClick={() => { handleClick(item) }}>
                                <img src={button} className='ast_box' />
                                <div className='ast_centered' style={{ "pointer-events": "none" }}> {item} </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
