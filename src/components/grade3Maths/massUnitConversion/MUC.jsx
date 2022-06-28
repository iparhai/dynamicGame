import React, { useContext } from 'react'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import getURLParams from '../../../utils/getURLParams';
import './MNWN.css'
import Match from '../../gameType/match/match';
import getAsset from '../../../utils/getAsset';
import { object } from 'prop-types';
import GlobalState from '../../HintsContext';
export default function MUC(props) {

    const [numberBeforeOptions, setNumberBeforeOptions] = React.useState(null)
    const [numberAfterOptions, setNumberAfterOptions] = React.useState(null)
    const [ans, setAnswer] = React.useState(null)
    const [problem, setProblem] = React.useState(null)
    const [numberTap, setNumberTap] = React.useState(false)
    const [nameTap, setNameTap] = React.useState(false)
    const [board, setBoard] = React.useState(null)
    const [hintState, setHintState] = useContext(GlobalState);

    useEffect(() => {
        setProblem(problemGenerator.generate())
        setNumberTap(true)
        setHintState("")
        setBoard(getAsset.getObjectByProperty("board|n"))
    }, [])
    useEffect(() => {
        if (problem == null) return
        console.log(problem)
        const options = problem.options
        setNumberBeforeOptions(options.numbersBefore.sort(() => Math.random() > 0.5))
        setNumberAfterOptions(options.numbersAfter)
    }, [problem])
    const solveProblem = (ans, problem) => {
        if (ans.number == (problem.numberBefore + problem.unitBefore) && ans.name == (problem.numberAfter + problem.unitAfter)) {
            return true
        }
        return false
    }
    useEffect(() => {
        if (ans == null) return
        if (ans.name == null || ans.number == null) {
            return
        }
        console.log(ans)
        setTimeout(() => {
            if (solveProblem(ans, problem)) {
                return props.onCorrectAnswer()
            }
            return props.onWrongAnswer()
        }, 500)
    }, [ans])

    // const getBoard = (property) => {

    //     console.log(objects.length)
    //     console.log(parseInt(Math.random() * objects.length))
    //     return objects[parseInt(Math.random() * objects.length)]
    // }
    return (
        <div className="fade">
            {/* {problem && <div className="thought" style={{ color: "white" }}>
                <h5>
                    Can You Match {problem.number} with its name ?
                </h5> 
            </div>} */}

            {numberBeforeOptions && numberAfterOptions && <Match listA={numberBeforeOptions} listB={numberAfterOptions} problem={problem} ans={ans} setAnswer={setAnswer} object={board} combination={"01"} />}
        </div>
    )
}
