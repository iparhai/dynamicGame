import React from 'react'
import './catch.css'

import catRun from './sprites/run/cat.png'
import guyRun from './sprites/run/guy.png'
import Spritesheet from 'react-responsive-spritesheet';
import { useEffect } from 'react';

export default function Chase({ correct, onWrong, OnRight }) {
    const [left, setLeft] = React.useState(80)
    const [guyLeft, setGuyLeft] = React.useState(50)
    const [ifAway, setIfAway] = React.useState(false)
    const step = 2
    useEffect(() => {
        if (correct) {
            setLeft(left - 5)
        }
        else
            setLeft(left + step)
    }, [correct])
    useEffect(() => {
        if (ifAway) return
        if (Math.abs(left - guyLeft) < step * 5) {
            OnRight()
        }
        else if (Math.abs(left - guyLeft) > 40) {
            setIfAway(true)
        }
    }, [left])
    useEffect(() => {
        if (!ifAway) return
        onMaxDistance()
        setTimeout(() => {
            onWrong()
        }, 1000)
    }, [ifAway])

    const onMaxDistance = () => {
        setLeft(left + 100)
    }
    return (
        <div>
            <div style={{ position: "absolute", top: "70vh", left: guyLeft + "vh", transitionDuration: "0.5s", zIndex: "1" }}>
                <Spritesheet
                    style={{ width: "10vw" }}
                    image={guyRun}
                    widthFrame={415}
                    heightFrame={507}
                    steps={10}
                    fps={10}
                    autoplay={true}
                    loop={true}
                />
            </div>
            <div style={{ position: "absolute", top: "77vh", left: left + "vh", transitionDuration: ifAway ? "2s" : "0.5s", zIndex: "1" }}>
                <Spritesheet
                    style={{ width: "10vw" }}
                    image={catRun}
                    widthFrame={542}
                    heightFrame={474}
                    steps={7}
                    fps={10}
                    autoplay={true}
                    loop={true}
                />
            </div>
            {/* <img src={runAnimation[index]} /> */}

            {/* <div class="moon"></div> */}
        </div>

    )
}
