//IMPORTING IMAGES
import React from 'react'
import compass from './Instruments/Compass.png';
import divider from './Instruments/Divider.png';
import pencil from './Instruments/pencil.png';
import eraser from './Instruments/eraser.png';
import ruler from './Instruments/ruler.png';
import setSquares from './Instruments/setSquares.png';

var posxy = [{
    top: '10%',
    left: '5%',
}, {
    top: '10%',
    right: '5%',
}, {
    bottom: '5%',
    left: '5%',
}, {
    bottom: '5%',
    right: '10%',
}, {
    top: '35%',
}, {
    top: '55%',
    left: '30%',
}]
posxy = posxy.sort(() => 0.5 - Math.random(0))


export default function RandomInstruments({ handleAnswer }) {
    const parentStyle = {
        width: '15%',
        position: 'fixed',
    }
    const imgDiv = {
        textAlign: 'center',
        width: '100%',
        height: '95vh'
    }
    const [posi, setPosi] = React.useState([
        {
            name: "Compass",
            src: compass,
            style: {
                transform: 'rotate(-20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Divider",
            src: divider,
            style: {
                transform: 'rotate(20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Eraser",
            src: eraser,
            style: {
                transform: 'rotate(-10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Pencil",
            src: pencil,
            style: {
                transform: 'rotate(10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Ruler",
            src: ruler,
            style: {
                transform: 'rotate(-15deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Set square",
            src: setSquares,
            style: {
                transform: 'rotate(15deg)',
                filter: 'opacity(50%)'
            }
        }
    ])
    const check = (i) => {
        let temp = [...posi]
        temp[i].style.filter = "opacity(100%)"
        setPosi(temp)
        window.setTimeout(() => {
            handleAnswer(posi[i].name)
        }, 1000)
        // handleAnswer(posi[i].name)
    }
    return (
        <div style={imgDiv}>
            {posi.map((obj, idx) => {
                return (
                    <img src={obj.src} style={{ ...parentStyle, ...obj.style, ...posxy[idx] }} alt="" onClick={() => check(idx)} />
                )
            })}

        </div>
    );
}
