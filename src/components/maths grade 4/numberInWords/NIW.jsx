import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Puzzle from '../../gameType/puzzle/Puzzle';
import problemSolver from './problemSolver';
import problemGenerator from './problemGenerator';
import GlobalState from '../../HintsContext';

export default function NIW(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const [ans, setAns] = React.useState([])
    const [hintState, setHintState] = React.useContext(GlobalState)
    useEffect(() => {
        setHintState(problem.question)
    }, [])
    useEffect(() => {
        console.log(ans)
    }, [ans])
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            {console.log(problem)}
            {problem.options && <Puzzle sequence={problem.options} setAns={(answer, indexPuzzle) => {
                const temp = ans.filter(itm => {
                    if (itm.indexPuzzle == indexPuzzle)
                        return false
                    return true
                })
                if (temp.length != ans.length) {
                    setAns(temp)
                }
                else
                    setAns([...ans, { val: answer, indexPuzzle: indexPuzzle }])
            }}
            />}
            {/* <div>
                {ans.map(itm => {
                    return itm.val
                }).join(" ")}
            </div> */}
            <div onClick={() => {
                if (problemSolver.solve(ans, problem.answer)) {
                    props.onCorrectAnswer()
                }
                else {
                    props.onWrongAnswer()
                }
            }}>submit</div>
        </div>
    )
}
