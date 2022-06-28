import React, { memo } from 'react';
import { useDrag } from 'react-dnd';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'red',
    padding: '0.5rem 1rem',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    cursor: 'move',
    float: 'left',
    borderRadius: '50%'
};
export const Box = memo(function Box({ name, type, isDropped }) {
    const [{ opacity }, drag] = useDrag(() => ({
        type,
        item: { name },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
        //     hover(item, monitor) {
        //         if (!ref.current) {
        //             return;
        //         }
        //         const dragIndex = item.index;
        //         const hoverIndex = index;
        //         if (dragIndex === hoverIndex) {
        //             return;
        //         }
        //         const clientOffset = monitor.getClientOffset();
        //         moveCard(dragIndex, hoverIndex);
        //         item.index = hoverIndex;
        //     }
    }),
        [name, type]);
    return (<div ref={drag} role="Box" style={{ ...style, opacity }}>
        {name}
    </div>);
});
