import React from 'react'
import { useEffect } from 'react';
import getAsset from '../../../utils/getAsset'
import cross from './cross.png'
export default function Borrow({ problem, setAns, operator }) {
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
    const [upper, setUpper] = React.useState("99008".split(""))
    const [lower, setLower] = React.useState(problem.lower.split(""))
    const [answer, setAnswer] = React.useState([])
    const [borrow, setBorrow] = React.useState([...Array(upper.length).fill(0)])
    const [borrower, setBorrower] = React.useState([...Array(upper.length).fill(null)])

    const [ifBorrow, setIfBorrow] = React.useState(false)
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
        console.log(problem.upper)
    }, [])
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
        // console.log(ans)
        setAns(ans)
    }
    const canBorrow = (ch, idx) => {
        console.log(currentIndex, idx, borrower[idx])
        if (idx < currentIndex && (parseInt(ch) > 0 || (parseInt(ch) == 0 && borrower[idx]))) {
            return true
        }
        return false
    }


    return (
        <div style={{ marginTop: "30vh" }}>
            <div style={{ marginLeft: "14vw" }}>
                <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", fontSize: "4vw" }}>
                    {/* {console.log(problem.upper.split(""))} */}
                    {upper.map((ch, idx) => {
                        return (
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }} onClick={() => {
                                    if (currentIndex > 0 && canBorrow(ch, idx)) {
                                        let tempBorrow = [...borrow]
                                        let tempBorrower = [...borrower]
                                        if (parseInt(ch) != 0) {
                                            tempBorrow[idx] = parseInt(ch) - 1
                                        }
                                        else {
                                            tempBorrow[idx] = 10 - 1
                                            tempBorrower[idx] = null
                                        }
                                        setBorrow(tempBorrow)
                                        tempBorrower[idx + 1] = 1
                                        setBorrower(tempBorrower)
                                    }
                                }}>
                                    {borrower[idx] &&
                                        <div style={{ width: "50%", fontSize: "2vw" }}  >
                                            <img style={{ width: "2vw" }} src={numberImages[1]} />
                                        </div>
                                    }
                                    {borrow[idx] > 0 &&
                                        <div style={{ width: "50%", fontSize: "2vw" }} onClick={() => { setBorrow([...borrow]) }}  >
                                            <img style={{ width: "2vw" }} src={numberImages[borrow[idx]]} />
                                        </div>
                                    }
                                    <div style={{ position: "relative  ", width: "5vw" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0 }}>
                                            {borrow[idx] > 0 && < img style={{ width: '5vw' }} src={cross} />}
                                        </div>
                                        <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <div style={{ display: "flex" }}>
                <div>{operator}</div> */}
                <div style={{ display: "flex", width: "30vw", justifyContent: "space-around", paddingTop: "20px", borderBottom: "3px solid #aaa", fontSize: "4vw" }}>
                    {/* {console.log(problem.upper.split(""))} */}
                    <div style={{ width: '5vw' }}>

                    </div>
                    {lower.map(ch => {
                        return (
                            <div>
                                <img style={{ width: "5vw" }} src={numberImages[parseInt(ch)]} />
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
                                setCurrentIndex(currentIndex + 1);
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
                                    setIfBorrow(false)
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

        </div >
        // </div>
    )
}
