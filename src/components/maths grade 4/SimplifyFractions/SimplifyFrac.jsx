import React from 'react';
import {DndProvider} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import Main from './Main';




function MulFrac(props){
    return(
    <DndProvider options={HTML5toTouch}>
        <Main onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer}/>
    </DndProvider>
    )
}

export default MulFrac;