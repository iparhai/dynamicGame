import React from 'react';
import {DndProvider} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import Dragdrop from './Dragdrop';

function romanNUmber(props) {
  return (
    <DndProvider options={HTML5toTouch}>
    {/* <div className="App"> */}
      <Dragdrop onCorrectAnswer={props.onCorrectAnswer} onWrongAnswer={props.onWrongAnswer}/>
    {/* </div> */}
    </DndProvider>
  );
}

export default romanNUmber;