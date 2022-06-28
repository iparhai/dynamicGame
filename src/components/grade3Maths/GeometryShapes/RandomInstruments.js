//IMPORTING IMAGES
import React from 'react'
import octagon from './Instruments/octagon.png';
import parallelogram from './Instruments/parallelogram.png';
import rhombus from './Instruments/rhombus.png';
import trapezoid from './Instruments/trapezoid.png';
import triangle from './Instruments/triangle.png';
import pentagon from './Instruments/pentagon.png';

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
            name: "Octagon",
            src: octagon,
            style: {
                transform: 'rotate(-20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Parallelogram",
            src: parallelogram,
            style: {
                transform: 'rotate(20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Rhombus",
            src: rhombus,
            style: {
                transform: 'rotate(-10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Trapezoid",
            src: trapezoid,
            style: {
                transform: 'rotate(10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Triangle",
            src: triangle,
            style: {
                transform: 'rotate(-15deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "Pentagon",
            src: pentagon,
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
