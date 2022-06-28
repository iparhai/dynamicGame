import React from "react";
import {useDrag} from 'react-dnd';

function Items({roman,url,close}){
    const [{ isDragging }, dragRef] = useDrag({
        type: 'stone',
        item: { roman, url },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return(
        <>
            <img src={url} ref={dragRef} width='10%' onClick={close}/>
            {/* {isDragging && 'dragged'} */}
        </>
    );
}

export default Items;