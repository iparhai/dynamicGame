import React from 'react'
import { useEffect } from 'react';
import getAsset from '../../../utils/getAsset'

export default function Carry({ problem, setAns, operator }) {
    const paperPlane = {
        background: "none",
        padding: "15px",
        border: "none",
        borderRadius: "0.6em",
        color: 'white',
        fontSize: '25px'
    }
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrow = getAsset.getObjectByProperty("arrow|alive")
    const [upper, setUpper] = React.useState(problem.upper.split(""))
    const [lower, setLower] = React.useState(problem.lower.split(""))
    const [answer, setAnswer] = React.useState([])
    const [carry, setCarry] = React.useState(0)
    const [currentIndex, setCurrentIndex] = React.useState(upper.length - 1)
    const [alignment, setAllignment] = React.useState(0)
    const numberImages = function getNumbers() {
        var arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(getAsset.getObjectByProperty("" + i + "|digit|n"))
        }
        return arr
    }()
    useEffect(() => {
        console.log(alignment)
    }, [alignment])
    const evaluate = () => {
        let ans = 0
        answer.map(item => {
            ans += parseInt(item)
            ans = ans * 10
        })
        ans = ans / 10
        setAns(ans)
    }
    return (
        <div style={{ marginTop: "30vh" }}>
            <div style={{ marginLeft: "14vw" }}>
                <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", fontSize: "4vw" }}>
                    {/* {console.log(problem.upper.split(""))} */}
                    {upper.map((ch, idx) => {
                        return (
                            <div style={{ display: "flex" }}>
                                {currentIndex >= 0 && currentIndex == idx &&
                                    <div style={{ width: "50%", fontSize: "2vw" }} onClick={() => { setCarry(carry == 0 ? 1 : 0) }} >
                                        <img style={{ width: "2vw" }} src={numberImages[carry]} />
                                    </div>}
                                <div >
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <div style={{ display: "flex" }}>
                <div>{operator}</div> */}
                <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", paddingTop: "20px", borderBottom: "3px solid #aaa", fontSize: "4vw" }}>
                    {/* {console.log(problem.upper.split(""))} */}
                    {lower.map((ch,idx) => {
                        return (
                            <div style={{ display: 'flex' }}>
                                {currentIndex >= 0 && currentIndex == idx &&
                                    <div style={{ width: "50%", fontSize: "2vw" }}>
                                        <div style={{ width: '2vw' }}></div>
                                        {/* <img style={{ width: "2vw" }} src={{}} /> */}
                                    </div>}
                                <div>
                                    <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ display: "flex", width: alignment + "vw", justifyContent: "space-around", fontSize: "4vw", paddingLeft: (30 - alignment) + "vw" }}>
                    {/* {console.log(problem.upper.split(""))} */}
                    {answer.map((ch, idx) => {
                        return (
                            <div onClick={() => {
                                const ans = answer.filter((item, id) => idx != id)
                                setAnswer(ans)
                                setCurrentIndex(currentIndex + 1); setCarry(0)
                                if (ans.length >= upper.length && alignment >= 30) return
                                setAllignment(alignment - (30 / upper.length));

                            }} >
                                <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />

                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{
                width: '60vw',
                display: 'flex',
                margin: '0 auto',
                justifyContent: 'center',
                flexWrap: 'nowrap',
                // borderRadius: "1em",
            }}>
                <div style={{ width: '80%', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-evenly', backgroundColor: '#8B4513' }}>
                    {
                        numbers.map((num) => {
                            return (
                                <h2 onClick={() => {
                                    if (answer.length > upper.length) {
                                        return
                                    }
                                    setAnswer([num, ...answer])
                                    setAllignment(alignment >= 30 ? alignment : alignment + (30 / upper.length))
                                    setCurrentIndex(currentIndex - 1);
                                    setCarry(0)
                                }}>{num}</h2>
                            );
                        })
                    }
                </div>
                <div style={{ border: '1px solid red', width: '10%', backgroundColor: "red" }}>
                    <button
                        style={{ ...paperPlane }}

                        onClick={() => evaluate()}
                    >
                        <i className='fa fa-paper-plane'></i>
                    </button>
                </div>
            </div>

        </div>
        // </div>
    )
}
