import React from "react";

import FilledSegment from './images/segment@2.png';


function Items({number,clicked}) {


    return (
        <>
            <div className='CON__dragonSegments' id='options'>
                <img
                    src={FilledSegment}
                    width='100%'
                    onClick={clicked}
                />
                <h1>{number}</h1>
            </div>
        </>
    );
}

export default Items;