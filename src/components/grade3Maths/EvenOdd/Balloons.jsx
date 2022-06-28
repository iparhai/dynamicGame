import React from 'react';
import ReactDOM from 'react-dom';
import './EvenOdd.css';

function Balloons({Key, B_Number, Top, Left, Release}){
    // if(Release >= Left){
    //     console.log(B_Number);
    // }
    return(
        <div className='Balloon' style={{top:Top+'%',left:Left+'%'}}>
            {B_Number}
        </div>
    );
}

export default Balloons;