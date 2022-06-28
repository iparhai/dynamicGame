import React, { useEffect } from 'react'
import Time from '../../gameType/time/Time'
import problemGenerator from './problemGenerator';
import getAsset from '../../../utils/getAsset';
import './digitalTime.css'
import getURLParams from '../../../utils/getURLParams';
import problemSolver from './problemSolver';
import AnswerModal from '../../AnswerModal';
import GlobalState from '../../HintsContext';


export default function DigitalTime(props) {
    const hourImage = getAsset.getObjectByProperty("clock|hour|n")
    const minImage = getAsset.getObjectByProperty("clock|min|n")
    const amImage = getAsset.getObjectByProperty("clock|am|n")
    const pmImage = getAsset.getObjectByProperty("clock|pm|n")
    const arrow = getAsset.getObjectByProperty('arrow|alive|right|n')
    const resultButton = getAsset.getObjectByProperty('result|button|n')
    const [problem, setProblem] = React.useState(problemGenerator.generateTimeProblem())
    const [hourCount, setHourCount] = React.useState("01")
    const [minCount, setMinCount] = React.useState("00")
    const [attemptedAnswer, setAttemptedAnswer] = React.useState()
    const [ifAm, setIfAm] = React.useState(true)

    const [hintState, setHintState] = React.useContext(GlobalState)
    useEffect(() => {
        setHintState(problem.question + " by tapping on the arrows")
    }, [])
    const handleSubmit = () => {
        const dif = getURLParams.dif
        const zone = ifAm ? 0 : 1
        if (problemSolver.solve({ hour: hourCount, minute: minCount, zone: dif == 'm' ? zone : null }, problem)) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    const handleHour = (inc) => {
        var tempHour = parseInt(hourCount)
        if (inc) {
            if (tempHour < 12) {
                tempHour = (tempHour + 1) + ""
                if (tempHour == 12) {
                    setIfAm(!ifAm)
                }
            }
            else {
                tempHour = "1"
            }
        }
        else {
            if (tempHour > 1)
                tempHour = (tempHour - 1) + ""
        }
        if (tempHour < 10)
            tempHour = "0" + tempHour
        setHourCount(tempHour)
    }
    const handleMin = (inc) => {
        var tempMin = parseInt(minCount)
        if (inc) {
            if (tempMin == 59) {
                tempMin = "0"
                handleHour(inc)
            }
            else if (tempMin < 59)
                tempMin = (tempMin + 1) + ""
        }
        else {
            if (tempMin > 0)
                tempMin = (tempMin - 1) + ""
        }
        if (tempMin < 10)
            tempMin = "0" + tempMin
        setMinCount(tempMin)
    }
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            {/* <Time correctAnswer={{ hour: hour, minute: minute }} attemptedAnswer={(value) => {
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
            }} /> */}
            <div style={{ display: 'flex', transitionDuration: "0.6s" }}>
                <div className="containerClock" >
                    <img src={arrow} className="arrow_up" onClick={() => {
                        handleHour(true)

                    }} />
                    <img src={hourImage} className="clock" />
                    <div className="center font" style={{ "pointer-events": "none" }} >
                        {hourCount}
                    </div>
                    <img src={arrow} className="arrow_down" onClick={() => {
                        handleHour(false)
                    }} />
                </div>
                <div style={{ fontSize: "calc(15px + 20vmin)" }} className="containerClock"><strong>:</strong></div>

                <div className="containerClock" >
                    <img src={arrow} className="arrow_up" onClick={() => {
                        handleMin(true)

                    }} />
                    <img src={minImage} className="clock" />
                    <div className="center font" style={{ "pointer-events": "none" }}>
                        {minCount}
                    </div>
                    <img src={arrow} className="arrow_down" onClick={() => {
                        handleMin(false)

                    }} />

                </div>
                {getURLParams.dif == 'm' && <div className="containerClock" >
                    <img src={arrow} className="arrow_up" style={{ opacity: 0 }} />

                    <img src={ifAm ? amImage : pmImage} className="clock" />
                    <img src={arrow} className="arrow_down" style={{ opacity: 0 }} />

                </div >}

            </div>
            <div onClick={() => handleSubmit()}>
                <img src={resultButton} style={{ width: "100%", maxWidth: "7vw" }} />
            </div>
        </div>
    )
}
