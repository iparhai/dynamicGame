import React from 'react';
import data from './data';
import './DDM.css'
const questionStyle = {
    // textAlign : 'center',
    // border : '1px solid red',
    width: '50%',
    margin: '0 auto',
    padding: '1%',
    borderRadius: '20px',
    backgroundColor: 'rgb(128,128,128,0.1)',
    textAlign: 'center',
}



export default function Question(props) {
    return (

        <div className="dateDaysQuestion" >
            <h1 >
                Select {data[props.dayIndex]}/{props.randomMonth}/{props.randomYear} from below
            </h1>
        </div>

    )
}
