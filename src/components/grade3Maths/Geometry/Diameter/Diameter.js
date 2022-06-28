import React from 'react';
import ReactDOM from 'react-dom';
import {DndProvider} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import DragDrop from './DragDrop'

function Diameter(props){
    return(
        <DndProvider options={HTML5toTouch}>
            <DragDrop onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer}/>
        </DndProvider>
    )
}

export default Diameter;