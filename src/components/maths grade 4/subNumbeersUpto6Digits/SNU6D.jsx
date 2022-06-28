import React from 'react'
import Carry from '../../gameType/carryBorrow/Carry'
import problemGenerator from './problemGenerator'
import './SNU6D.css'
import { useEffect } from 'react'
import Borrow from '../../gameType/carryBorrow/Borrow'
import GlobalState from '../../HintsContext'

export default function SNU6D(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const [submittedAnswer, setsubmittedAnswer] = React.useState(null)
    const [hintState, setHintState] = React.useContext(GlobalState)

    useEffect(() => {
        setHintState(problem.question)
    }, [])
    useEffect(() => {
        if (!submittedAnswer) return
        console.log(problem.ans, submittedAnswer)
        if (parseInt(problem.ans) == parseInt(submittedAnswer)) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }, [submittedAnswer]);

    console.log(submittedAnswer);
    return (
        <div className="fade">
            <div className="thought_4" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            <div>
                <Borrow
                    operator={"-"}
                    problem={{ upper: problem.upper, lower: problem.lower }}
                    setAns={(ans) => setsubmittedAnswer(ans)}
                    width={5 * problem.upper.split("").length}
                />
            </div>
            {/* <button
                className='resButton'
                style={{
                    padding: '10px',
                    fontSize: '30px',
                    color: 'rgba(255,228,196)',
                    border: 'none',
                    backgroundColor: 'rgb(0,255,0)',
                    borderRadius: '15px',
                    boxShadow: '2px 2px rgba(255,228,196)'
                }}
                onClick={handleSubmit}
            ><i className='fa fa-paper-plane'></i></button> */}
        </div>

    )
}
