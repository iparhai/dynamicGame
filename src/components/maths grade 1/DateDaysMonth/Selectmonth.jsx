import React, { useEffect } from 'react';
import getAsset from '../../../utils/getAsset';
import './DDM.css'

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

const monthStyle = {
    textAlign: 'center',
    border: 'none',
    position: 'absolute',
    left: '25%',
    top: "0%",
    padding: '0.8%',
    borderRadius: '10px',
    color: 'white'
}
let index = 0
export default function Selectmonth(props) {

    const board = getAsset.getObjectByProperty("board_button")
    const forward = getAsset.getObjectByProperty("forward_button")
    const backward = getAsset.getObjectByProperty("backward_button")

    const [month, setMonth] = React.useState(months[index])
    useEffect(() => {
        props.handlemonth(month)
    }, [])
    useEffect(() => {
        props.handlemonth(month)
    }, [month])
    return (
        <div className="boardContainerMonth"  >
            <div style={monthStyle}>
                <img src={board} className="boardMonth" />
                <div className="centerMonth" style={{ color: '#003d6b' }} onClick={(e) => {
                    if (index < months.length - 1) {
                        index = index + 1
                        setMonth(months[index])
                    }
                    else {
                        index = 0
                        setMonth(months[index])
                    }

                }}>
                    {month}
                </div>
            </div>
            {/* <select style={monthStyle} onChange={
                    (e) => props.handlemonth(e.target.value)

                }>
                    {months.map((val) => {
                        return (
                            <option>{val}</option>
                        );
                    })}
                </select> */}

        </div>

    )
}
