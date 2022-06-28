import React, { useEffect } from 'react'
import GlobalState from '../../HintsContext';
import problemGenerator from './problemGenerator'
import RandomInstruments from './RandomInstruments'

export default function GeometryShapes(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const [hintState, setHintState] = React.useContext(GlobalState)
    useEffect(() => {
        // setproblem(problemGenerator.generateCountingProblem())
        setHintState(problem.question + " on the screen")

    }, [])
    const handleAnswer = (name) => {
        if (problem.instrument == name) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    
    return (
        <div className="fade">

            <div className="thought " style={{ color: "white" }}>
                {problem.question}
            </div>
            <div>
                <RandomInstruments handleAnswer={handleAnswer} />
            </div>
        </div>
    )
}
