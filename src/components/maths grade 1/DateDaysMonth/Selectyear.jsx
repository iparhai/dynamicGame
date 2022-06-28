import React, { useEffect } from 'react';
import getAsset from '../../../utils/getAsset';
import './DDM.css'

const years = [];

for (var i = 2010; i <= 2030; i++) {
    years.push(i);
}
console.log(years);
const yearStyle = {
    textAlign: 'center',
    border: 'none',
    position: 'absolute',
    right: '25%',
    marginTop: '5%',
    padding: '0.8%',
    borderRadius: '10px',
    color: 'white'
}
let index = 0
export default function SelectYear(props) {
    const board = getAsset.getObjectByProperty("board_button")
    const forward = getAsset.getObjectByProperty("forward_button")
    const backward = getAsset.getObjectByProperty("backward_button")
    const [year, setYear] = React.useState(years[index])
    useEffect(() => {
        props.handleYear(year)
    }, [])
    useEffect(() => {
        props.handleYear(year)
    }, [year])
    return (
        <div className="boardContainerYear"  >
            <div style={yearStyle}>
                <img src={board} className="boardMonth" />
                <div className="centerMonth" style={{ color: '#003d6b' }} onClick={(e) => {
                    if (index < years.length - 1) {
                        index = index + 1
                        setYear(years[index])
                    }
                    else {
                        index = 0
                        setYear(years[index])
                    }
                }}>
                    {year}
                </div>
            </div>
        </div>



        // <div style={{ position: 'relative' }}>
        //     <select style={yearStyle} onChange={
        //         (e) => props.handleyear(parseInt(e.target.value))
        //     }>
        //         {year.map((val) => {
        //             return (
        //                 <option>{val}</option>
        //             );
        //         })}
        //     </select>
        // </div>
    )
}
