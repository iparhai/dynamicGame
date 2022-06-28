import React, { memo, useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Box } from './Box.jsx';
import { Dustbin } from './Dustbin.jsx';
import getAsset from '../../../utils/getAsset.js';
// import { ItemTypes } from './ItemTypes.js';
export const Container = memo(function Container({ ItemTypes, boxes, imageProperty, setPrimeList, setCompositeList }) {
    const [dustbins, setDustbins] = useState([
        { droppedItems: [] }, // Prime Bin
        { droppedItems: [] }, // Composite Bin
    ]);


    const [droppedBoxNames, setDroppedBoxNames] = useState([]);
    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }
    const handleSubmit = () => {
        setPrimeList(dustbins[0].droppedItems.map(item => item.props.name))
        setCompositeList(dustbins[1].droppedItems.map(item => item.props.name))
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        const indexToRemove = dustbins[index == 0 ? 1 : 0].droppedItems.findIndex(obj => obj.props.name == name)
        console.log(indexToRemove)
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(
            update(
                update(
                    dustbins, {
                    [index]: {
                        droppedItems: name ? dustbins[index].droppedItems.findIndex(obj => obj.props.name == name) > -1 ? { $push: [] } : { $push: [<Box name={name} type='number' isDropped={isDropped(name)} />] } : { $push: [] },
                    },
                }),
                {
                    [index == 0 ? 1 : 0]: {
                        droppedItems: {
                            $splice: [[indexToRemove, (indexToRemove + 1) > 1 ? 1 : indexToRemove + 1]]
                        }
                    }
                }
            ))

        console.log(dustbins)
    }, [droppedBoxNames, dustbins]);
    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both', display: "flex", justifyContent: "center" }}>
                {dustbins.map(({ droppedItems }, index) => (<Dustbin accept={'number'} droppedItems={droppedItems} onDrop={(item) => handleDrop(index, item)} key={index} type={index} />))}
            </div>
            <div style={{ position: "absolute", top: "45vh", left: "75%" }}>
                <button className="App-link" style={{
                    background: "rgb(49 205 97)",
                    padding: "10px",
                    border: "1px solid #057897",
                    borderRadius: "0.6em",
                }} onClick={handleSubmit}><i class="fa fa-paper-plane 3x" aria-hidden="true"></i></button>
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {boxes.map((number, index) => (<Box name={number} type={'number'} isDropped={isDropped(number)} key={index} />))}
            </div>
        </div>);
});
