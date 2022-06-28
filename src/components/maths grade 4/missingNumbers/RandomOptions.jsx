//IMPORTING IMAGES
import React from 'react'


export default function Randomimages({ handleAnswer, options }) {
    const parentStyle = {
        width: '15%',
        position: 'fixed',
    }
    const imgDiv = {
        textAlign: 'center',
        width: '100%',
        height: '95vh'
    }
    const [posxy, setPosxy] = React.useState([{
        top: '10%',
        left: '5%',

        transform: 'rotate(-20deg)',
        filter: 'opacity(50%)'

    }, {
        top: '10%',
        right: '5%',

        transform: 'rotate(20deg)',
        filter: 'opacity(50%)'

    }, {
        bottom: '5%',
        left: '5%',

        transform: 'rotate(-10deg)',
        filter: 'opacity(50%)'

    }, {
        bottom: '5%',
        right: '10%',

        transform: 'rotate(10deg)',
        filter: 'opacity(50%)'

    }, {
        top: '35%',

        transform: 'rotate(-15deg)',
        filter: 'opacity(50%)'

    }, {
        top: '55%',
        left: '30%',

        transform: 'rotate(15deg)',
        filter: 'opacity(50%)'

    }])
    const check = (option, i) => {
        let temp = [...posxy]
        temp[i].filter = "opacity(100%)"
        setPosxy(temp)
        window.setTimeout(() => {
            handleAnswer(option)
        }, 1000)
        // handleAnswer(posi[i].name)
    }
    return (
        <div style={imgDiv}>
            {options.map((item, idx) => {
                return (
                    <div className='pv_tile' style={{ ...parentStyle, ...posxy[idx] }} onClick={() => check(item, idx)}  >
                        <h5>{item}</h5>
                    </div>
                    // <img src={obj.src} style={{ ...parentStyle, ...obj.style, ...posxy[idx] }} alt="" onClick={() => check(idx)} />
                )
            })}

        </div>
    );
}
