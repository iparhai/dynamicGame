import React from 'react';
import ReactDOM from 'react-dom';
import {useDrag} from 'react-dnd';
import Stone from './images/stone.png';


function Alphabets({point,close,basketStyle}){
    const [{ isDragging }, dragRef] = useDrag({
        type: 'alphabets',
        item: {point},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return(
        
            <span ref={dragRef} onClick={close}>{point}</span>
        
    );
}

export default Alphabets;