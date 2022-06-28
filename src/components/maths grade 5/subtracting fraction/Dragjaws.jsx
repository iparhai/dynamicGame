import React from 'react';
import ReactDOM from 'react-dom';
import {useDrag} from 'react-dnd';

function Dragjaws({Key,number,image}){
    const [{ isDragging }, dragRef] = useDrag({
        type: 'jaws',
        item: {number},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return(
        <img src={image} ref={dragRef} />
    )
}

export default Dragjaws;