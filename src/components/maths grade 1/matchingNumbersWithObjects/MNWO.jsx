import React from 'react'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getURLParams from '../../../utils/getURLParams';
import './MNWO.css'
import Match from '../../gameType/match/match';
import getAsset from '../../../utils/getAsset';
import { object } from 'prop-types';
import GlobalState from '../../HintsContext';
import { useContext } from 'react';
export default function MatchingNumbersWithObjects(props) {

    const [numberOptions, setNumberOptions] = React.useState(null)
    const [ans, setAnswer] = React.useState(null)
    const [problem, setProblem] = React.useState(null)
    const [board, setBoard] = React.useState(null)
    const [questionObject, setQuestionObject] = React.useState(null)
    const [hintState, setHintState] = useContext(GlobalState);

    useEffect(() => {
        setProblem(problemGenerator.generateProblem())
        setHintState("lets count and match the objects with numbers")
        setBoard(getAsset.getObjectByProperty("board|n"))
        setQuestionObject(getAsset.getObjectByProperty("object|1"))
    }, [])
    useEffect(() => {
        if (problem == null) return
        const options = problemGenerator.generateOptions(problem, 4)
        setNumberOptions(options.numbers)
    }, [problem])
    useEffect(() => {
        if (ans == null) return
        if (ans.name == null || ans.number == null) return
        setTimeout(() => {
            if (problemSolver.solveProblem(ans, problem)) {
                return props.onCorrectAnswer()
            }
            return props.onWrongAnswer()
        }, 500)
    }, [ans])

    const getObject = (property) => {
        const objects = getAsset.getObjectListByProperty(property)
        console.log(objects.length)
        console.log(parseInt(Math.random() * objects.length))
        return objects[parseInt(Math.random() * objects.length)]
    }

    return (
        <div className="fade">
            {/* {problem && <div className="thought" style={{ color: "white" }}>
                <h5>
                    Can You Match {problem.number} with object ?
                      
                    
                </h5>
            </div>} */}
            {numberOptions && <Match listA={numberOptions} listB={numberOptions} ans={ans} problem={problem} setAnswer={setAnswer} object={board} combination={"02"} questionObject={questionObject} />}
        </div>
    )
}
