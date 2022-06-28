import React from 'react';
import { useEffect } from 'react';
import Card from './Card';
import resultBg from './images/res_bg-01.png'


const flexStyle = {
    display: 'flex',
    width: '90%',
    // border: '1px solid red',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '35vh auto 0vh',
    // paddingTop: '5%'
}
const resultStyle = {
    // backgroundColor: 'red',
    width: '20%',
    // height: '10vh',
    margin: '0 auto',
    textAlilgn: 'center',
    backgroundImage: `url(${resultBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
export default function Puzzle(props) {
    console.log(props.sequence.length)
    const [clicked, setClicked] = React.useState((new Array(props.sequence.length)).fill(false))
    // useEffect(() => {
    //     clicked.push(3)
    //     clicked.push(3)
    //     clicked.push(3)
    //     clicked.push(3)
    // }, [])
    // useEffect(() => {
    //     console.log(clicked)
    // }, [clicked])
    return (
        <div>
            <div className="" style={flexStyle}>
                {props.sequence.map((val, i) => {
                    return (
                        <Card
                            text={val}
                            handleCard={(option) => {
                                props.setAns(option, i)
                                var temp = [...clicked]
                                temp[i] = !temp[i]
                                setClicked(temp)
                            }}
                            clicked={clicked[i]}
                        />
                    );
                })}
            </div>
            {/* <div style={resultStyle}>
                 <img src={} /> 
                <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '10px' }} onClick={
                    () => {
                        console.log(ans, problem)
                        if ((ans.month == problem.month) && (ans.year == problem.year) && (ans.day == problem.day)) {
                            props.onCorrectAnswer()
                        }
                        else {
                            props.onWrongAnswer()
                        }
                    }
                }>Result</h1>
            </div> */}
        </div>
    )
}
