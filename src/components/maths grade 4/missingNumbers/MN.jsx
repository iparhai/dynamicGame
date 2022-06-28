import React, { useEffect } from 'react'
import GlobalState from '../../HintsContext'
import problemGenerator from './problemGenerator'
import RandomOptions from './RandomOptions'

export default function MN(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const [hintState, setHintState] = React.useContext(GlobalState)
    useEffect(() => {
        // setproblem(problemGenerator.generateCountingProblem())
        setHintState(problem.question + " on the screen")

    }, [])
    const handleAnswer = (option) => {
        if (option == problem.answer) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div className="fade">

            <div className="thought " style={{ color: "white" }}>
                <div style={{ display: "flex" }}>
                    {problem.sequence.map(item => {
                        return (
                            <div>{item} &nbsp;</div>
                        )
                    })}
                    <div>___________</div>
                </div>

            </div>
            <div>
                <RandomOptions options={problem.options} handleAnswer={handleAnswer} />
            </div>
        </div>
    )
}
