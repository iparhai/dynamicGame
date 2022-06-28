import React from 'react'
import Drop from '../../gameType/dragBox/drag'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getAsset from '../../../utils/getAsset';
import MultiDrag from '../../gameType/dragBox/multipleDrag';
import getURLParams from '../../../utils/getURLParams';
export default function SCO(props) {
    const [problem, setproblem] = useState()
    const [answer, setanswer] = useState()
    const [object, setObject] = useState()
    const [object10, setObject10] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const getRandomObject = (objectList) => {
        objectList = objectList.filter((item) => {
            if (item.includes("drag")) {
                return true
            }
            return false
        })
        return objectList[parseInt((Math.random() * (objectList.length)))]
    }
    useEffect(() => {
        setproblem(problemGenerator.generateSubtractionProblem(""))
        setObject(getAsset.getObjectByProperty("drag|1"))
        setObject10(getAsset.getObjectByProperty("drag|10"))

        setanswer(0)
    }, [])
    const evaluateProblem = () => {
        setIfCorrect(problemSolver.solve(problem, answer))
    }
    useEffect(() => {
        if (ifCorrect == null) return
        if (ifCorrect == false) {
            props.onWrongAnswer()
        }
        else {
            props.onCorrectAnswer()
        }
    }, [ifCorrect])
    return (
        <div>
            {problem && <div>
                <h1 style={{ fontSize: "3.5em" }}> {problem.problem} </h1>
                {getURLParams.dif == 'b'
                    ? <Drop handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} img={object} />

                    : <MultiDrag handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} obj_1={object} obj_10={object10} />
                }
            </div>}
        </div>
    )
}
