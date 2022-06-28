import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import candyDead from './assets/guy.png'
import './Lcm.css';


export default function Sprite({travel}) {
    console.log("travel"+travel);
    const distance = {
        width : '10vw',
        position : 'absolute',
        left : travel+'%',
        transitionDuration : '0.9s'
    }
    return (
            <Spritesheet
                    style={distance}
                    image={candyDead}
                    widthFrame={415}
                    heightFrame={507}
                    steps={10}
                    fps={10}
                    autoplay={true}
                    loop={true}
            />
    )
}
