import React from 'react';
import ReactDOM from 'react-dom';
import {useDrag} from 'react-dnd'

function Items({numerator,denominator}){
    const [{ isDragging }, dragRef] = useDrag({
        type: 'fraction',
        item: {n: numerator, d: denominator },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return(
        <div className='PIMPItems' ref={dragRef}>
            <h6>{numerator}</h6>
            <hr />
            <h6>{denominator}</h6>
        </div>
    );
}

export default Items;