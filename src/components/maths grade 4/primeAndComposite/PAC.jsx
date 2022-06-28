import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Container } from './Containers';
import problemGenerator from './problemGenerator';

import "./PAC.css"


const COLUMN_NAMES = {
    PRIME: 'Prime Number',
    COMPOSITE: 'Composite Number'
}
export default function PAC({ onCorrectAnswer, onWrongAnswer }) {
    const { PRIME, COMPOSITE } = COLUMN_NAMES;
    const [problem, setProblem] = useState(problemGenerator.generate())
    const isMobile = window.innerWidth < 600;
    const [primeList, setPrimeList] = useState([])
    const [compositeList, setCompositeList] = useState([])
    const ifListsEqual = (listA, listB) => {
        console.log(listA, listB)
        if (listA.length != listB.length) return false
        for (var i = 0; i < listA.length; i++) {
            var found = false
            for (var j = 0; j < listA.length; j++) {
                if (listA[i] == listB[j]) {
                    found = true
                    break;
                }
            }
            if (found == false) {
                return false
            }
        }
        return true
    }
    useEffect(() => {
        if (primeList.length == 0 && compositeList.length == 0)
            return
        if (ifListsEqual(primeList, problem.answer.primeList) && ifListsEqual(compositeList, problem.answer.compositeList)) {
            onCorrectAnswer()
        }
        else {
            onWrongAnswer()
        }
    }, [primeList, compositeList])
    return (
        <div className="fade">
            <div className="thought_4" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            <div style={{ marginTop: "35vh" }}>
                <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                    <Container ItemTypes={COLUMN_NAMES} boxes={problem.pclist} imageProperty='fruit'
                        setPrimeList={(list) => setPrimeList(list)}
                        setCompositeList={(list) => setCompositeList(list)} />
                </DndProvider>
            </div>
        </div>
    );
}
