import React, { useEffect } from 'react'
import Time from '../../gameType/time/Time'
import GlobalState from '../../HintsContext';
import problemGenerator from './problemGenerator';

export default function AnalogTime(props) {
    const [hour, setHour] = React.useState();
    const [minute, setMinute] = React.useState();
    const [question, setQuestion] = React.useState();
    const [attemptedAnswer, setAttemptedAnswer] = React.useState()
    const [hintState, setHintState] = React.useContext(GlobalState)
    
    useEffect(() => {
        const newProblemSet = problemGenerator.generateTimeProblem();
        setHour(newProblemSet.hour)
        setMinute(newProblemSet.minute)
        setQuestion(newProblemSet.question)
        setHintState(newProblemSet.question + " by clicking H! and M!")
    }, [minute])
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {question}
                </h5>
            </div>
            <Time correctAnswer={{ hour: hour, minute: minute }} attemptedAnswer={(value) => {
                setAttemptedAnswer({
                    attemptedAnswer: value
                })
            }} submit={(correct, attemptedAnswer) => {
                // sessionData.setData(this.state.hour + "!" + this.state.minute, this.state.wordProblem, attemptedAnswer, this.state.hour + ':' + this.state.minute)
                if (correct) {
                    props.onCorrectAnswer()
                }
                else {
                    props.onWrongAnswer()
                }
            }} />
        </div>
    )
}
