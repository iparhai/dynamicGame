import React, { useContext, useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Draggable from '../../gameType/drag/draggable'
import problemGenerator from './problemGenerator'
import './Ascending.css'
import getURLParams from '../../../utils/getURLParams'
import GlobalState from '../../HintsContext'

export default function Ascending(props) {
    const [problem, setProblem] = useState(problemGenerator.generateSequence(6))
    const question = "Arrange the following numbers into ascending order";
    const [hintState, setHintState] = useContext(GlobalState);

    useEffect(() => {

        setHintState("Arrange the following numbers into ascending order!.")
        // setBoard(getAsset.getObjectByProperty("board|n"))
    }, [])
    const check = (arr) => {
        var currentValue = arr[0]
        for (var i = 0; i < arr.length; i++) {
            if (currentValue > arr[i]) {
                return false
            }
            currentValue = arr[i]
        }
        return true
    }
    const handleSubmit = () => {
        let ans = problem.map((obj) => {
            return (
                parseInt(obj.text)
            )
        })
        console.log(ans)
        if (check(ans)) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div>
            <div className="fade">
                <div className="thought " style={{ color: "white" }}>
                    {question}

                </div>
                <div>
                    <Draggable problemSequence={problem} handleSwap={(seq) => { setProblem(seq) }} />
                    <button className="App-link" style={{
                        background: "rgb(49 205 97)",
                        padding: "10px",
                        border: "1px solid #057897",
                        borderRadius: "0.6em",
                    }} onClick={handleSubmit}><i class="fa fa-paper-plane 3x" aria-hidden="true"></i></button></div>
            </div>
        </div>
    )
}
