import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import problemGenerator from './ProblemGenerator';
import './Angles.css';
import getURLParams from "../../../utils/getURLParams";
import GlobalState from '../../HintsContext';
import protactor from './images/protactor-01.png';
import handle1 from './images/hour.svg';
import handle2 from './images/minute.svg';
import angleButton from './images/angleButton.png';
import resetButton from './images/reset-01.png'

function AnglesG5(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate());
    const [meassure, setMeassure] = useState(0)
    const [offset, setOffset] = useState(5) //degree
    const dif = getURLParams.dif;
    const r1 = Math.floor(Math.random() * problem.angles.length);
    const [beginnerAngle, setBeginnerAngle] = useState(problem.angles[r1]);

    const [hintState, setHintState] = React.useContext(GlobalState);
    useEffect(() => {
        const hintText = {
            e: `Draw the angle with the help of protractor i.e.`,
            a: `ارسم الزاوية بمساعدة منقلة أي`,
            p: `زاویه د پروټیکټر په مرسته رسم کړئ`,
            u: `پروٹریکٹر کی مدد سے زاویہ کھینچیں یعنی`,
            k: `각도기의 도움으로 각도를 그립니다.`
        }
        let hT;
        if (getURLParams.lang == "a") {
            hT = hintText.a
        } else if (getURLParams.lang == "u") {
            hT = hintText.u
        } else if (getURLParams.lang == "p") {
            hT = hintText.p
        } else if (getURLParams.lang == 'k') {
            hT = hintText.k
        }
        else {
            hT = hintText.e
        }
        setHintState(hT)
        // setBoard(getAsset.getObjectByProperty("board|n"))
    }, [])


    const angleStyle = {
        measureRotate: {
            transform: "rotate(" + meassure + "deg)"
        }
    }
    console.log(meassure);
    const Validate = () => {
        if (dif == 'b') {
            if (meassure == beginnerAngle.answer) {
                props.onCorrectAnswer()
            }
            else {
                props.onWrongAnswer()
            }
        }
        else if (dif == 'i') {
            if (problem.angles[r1].angle == 'right angle' && meassure == 0) {
                props.onCorrectAnswer()
            }
            else if (problem.angles[r1].angle == 'acute angle' && ((meassure > 0) || (meassure <= 80))) {
                props.onCorrectAnswer()
            }
            else if (problem.angles[r1].angle == 'obtuse angle' && ((meassure > 270) || (meassure <= 355))) {
                props.onCorrectAnswer()
            }
            else {
                props.onWrongAnswer()
            }
        }
        else if (dif == 'a') {
            alert('advance')
        }
    }
    return (
        <div style={{ display: "flex", marginLeft: "18vh" }}>
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question} {beginnerAngle.angle} degree
                </h5>
            </div>
            <div style={{ position: "relative", marginTop: "32vh" }} >
                <img src={angleButton} className="measuringLine" style={angleStyle.measureRotate} onClick={() => {
                    if (meassure + offset == 360)
                        setMeassure(0)
                    else
                        setMeassure(meassure + offset)
                }} />
                <img src={resetButton} className="resetButton" onClick={() => setMeassure(0)} />
                <img src={handle2} className="handle2" style={angleStyle.measureRotate} />
                <img src={handle2} className="handle2" style={{ transform: 'rotate(90deg) ' }} />
                <img src={protactor} className="DividerBase" />
            </div>

            <div>
                <button className="glow-on-hover  bttn" type="button" style={{ marginTop: "46vh", marginLeft: "3vw" }} onClick={() => Validate()} > <i className="fa fa-paper-plane fa-3x" /></button>
            </div>
        </div>
    )
}

export default AnglesG5;