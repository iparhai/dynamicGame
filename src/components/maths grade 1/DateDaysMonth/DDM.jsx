import React from 'react';
import problemGenerator from './problemGenerator';
import Card from './Card';
import Question from './Question';
import Selectmonth from './Selectmonth';
import data from './data';
import resultBg from './images/res_bg-01.png'
import SelectYear from './Selectyear';


const flexStyle = {
    display: 'flex',
    width: '75%',
    // border: '1px solid red',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
    paddingTop: '10%'
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
export default function DDM(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generateProblem())
    const [ans, setAns] = React.useState({
        day: null,
        month: null,
        year: null
    })
    const [dates, setDates] = React.useState(problemGenerator.getDates('March'))



    return (
        <div className="fade">
            {problem && <h1 className="dateDaysQuestion" style={{ fontSize: "1.5em" }}> {problem.question} </h1>}

            <Selectmonth
                handlemonth={(month) => {
                    setDates(problemGenerator.getDates(month))
                    setAns({
                        ...ans, month: month, day: null
                    })
                }}
            />
            <SelectYear
                handleYear={(year) => setAns({
                    ...ans, year: year
                })}
            />

            <div className="" style={flexStyle}>
                {dates.map((val, i) => {
                    return (

                        <Card
                            text={val}
                            day={ans.day}
                            handleCard={(day) => setAns({
                                ...ans, day: day
                            })}
                        />

                    );
                })}
            </div>
            <div style={resultStyle}>
                {/* <img src={} /> */}
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
            </div>
        </div>
    )
}
