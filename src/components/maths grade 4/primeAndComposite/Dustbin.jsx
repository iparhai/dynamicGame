import { array } from 'prop-types';
import React, { memo } from 'react';
import { useDrop } from 'react-dnd';
import basket from './basket.png'
const style = {
    height: '15vw',
    width: '15vw',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    backgroundImage: `url(${basket})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"

};
export const Dustbin = memo(function Dustbin({ accept, droppedItems, onDrop, type }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    // let backgroundColor = '#222';
    // if (isActive) {
    //     backgroundColor = 'darkgreen';
    // }
    // else if (canDrop) {
    //     backgroundColor = 'darkkhaki';
    // }
    let top = 45;
    let left = -10;
    return (
        <div ref={drop} role="Dustbin" style={{ ...style, position: "relative" }}>
            <div style={{ position: "absolute", top: "65%", left: "44%", fontSize: "3vw" }}>
                {console.log(type)}
                <strong> {type == 0 ? "P" : "C"}</strong>
            </div>
            {/* {isActive
            ? 'Release to drop'
            : `This dustbin accepts: ${accept.join(', ')}`} */}
            {droppedItems.map((item) => {
                left = left + 15
                if (left == 95) {
                    top = 33
                    left = 0
                }
                return (
                    <div style={{ position: "absolute", top: top + "%", left: left + "%" }}>
                        <p>{item}</p>
                    </div>

                )
            })}
            {/* {lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)} */}
        </div>);
});
