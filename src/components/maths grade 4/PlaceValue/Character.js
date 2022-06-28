import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import yoshi_1 from "./images/youshi3.png";

function Character({className,style}){
    return(
        <div className={className} style={style}>
            <Spritesheet
                image={yoshi_1}
                widthFrame={26}
                heightFrame={60}
                steps={4}
                fps={3}
                loop={true}
                isResponsive={true}
                // onClick={spritesheet => {
                //     alert("ois");
                // }}
            />
        </div>
    )
}

export default Character;