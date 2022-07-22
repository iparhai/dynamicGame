import React from 'react'

export default function MultiplicationTutorial({ isOver, problem }) {
    setTimeout(() => {
        isOver()
    }, 10000)
    // const nu
    return (
        <>
            <div class="main-container">
                {/* <div class="road"></div>
                <div class="road-sideview"></div> */}
            </div>
            <div className="thought_4" style={{ color: "white" }}>
                <h5 >
                    How to Solve {problem.question}
                </h5>
            </div>
            <div class="main-container">
                <div>
                    {problem.firstNumber}
                </div>
                <div>
                    {problem.secondNumber}
                </div>
            </div>

        </>
    )
}
