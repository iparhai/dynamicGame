import React from 'react'
import resultBg from './images/day_bg-01.png';
// importing CSS file
import './Card.css';


const mainStyle = {
    // backgroundColor : '#7997d6',
    padding: '5px',
    // maxWidth: '5vw',
    // width: '10%',
    textAlign: 'center',
    margin: '1px',
    borderRadius: '5px',
    fontSize: '10px',
    color: '#003d6b',
    // backgroundImage: `url(${resultBg})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
}

export default function  Card(props) {
    return (
        <div className="trans" style={{ ...mainStyle, transform: props.clicked ? "rotate(10deg)" : "rotate(0deg)" }} onClick={(e) => props.handleCard(props.text)}>
            {props.clicked && <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 3, background: "hsla(100,0%,0%,0.3)" }}>
            </div>}
            <h1 className="days">{props.text}</h1>
        </div>
    )
}


// ()=>{
//     if(props.text == data[props.QuestionVal]){
//         alert('Wow')
//     }else{
//         alert('Chal Chal Awee')
//     }}