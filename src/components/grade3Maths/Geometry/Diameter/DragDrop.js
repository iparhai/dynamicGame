import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import LineTo from "react-lineto";
import { useDrop } from "react-dnd";
import { SteppedLineTo } from "react-lineto";
import getURLParams from "../../../../utils/getURLParams";
import array1,{array2,array3} from './positionarray';
import Alphabets from './alphabets';
import forward from './images/forward-01.png'
import backward from './images/backward-01.png'
import './diameter.css';

const dif = getURLParams.dif;

function DragDrop(props){
    const [beginner,setBeginner] = useState(array1);
    const [intermediate,setIntermediate] = useState(array2);
    const [advance,setAdvance] = useState(array3);
    const [dummy,setdummy] = useState(0);
    const [line,setLine] = useState();
    const [point,setPoint] = useState([]);
    const [basket,setBasket] = useState([]);
    const [counter,setCounter] = useState(0);
    
    let result;
    
    const [{ isOver }, dropRef] = useDrop({
        accept: 'alphabets',
        drop: (item) => setBasket((basket) => 
                            !basket.includes(item) ?  [...basket,item]: '1'),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });
    // console.log(basket);
    const clickPoint = (obj,idx) => {
        setdummy(dummy+1)
        setLine({...line,point:obj.point})
    }

    useEffect(()=>{
        if(dummy >= 1){
            setPoint([...point,line.point]);
            // console.log(line.point);
        }else{
            console.log('empty array');
        }
    },[line]);

    const Delete = (obj,idx) => {
        setPoint(point.slice(0, idx).concat(point.slice(idx + 1)));
        setBasket(basket.slice(0, idx).concat(basket.slice(idx + 1)));  
    }

    const check = () => {
        var totalBasket = '';
        basket.forEach(item => {
            totalBasket += item.point;  
        })
        result = point.join('');

        if(dif == 'b'){
            if(((result=='AB')||(result=='BA'))&&((totalBasket=='AB')||(totalBasket=='BA'))){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
        else if(dif == 'i'){
            if(((result=='FG')||(result=='GF'))&&((totalBasket=='FG')||(totalBasket=='GF'))){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
        else if(dif == 'a'){
            if(((result=='MR')||(result=='MN'))&&((totalBasket=='MR')||(totalBasket=='MN'))&&(counter==2)){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
    }

    return(
        
            <div className='main2'>
                <div className='questionDiameter'>
                    {
                        dif == 'a'?
                        <h6>Diameter of a circle is how many times it's radius?</h6>
                        :
                        <h6>Draw and Name Diameter of the following figure</h6>
                    }
                </div>
                {
                    dif == 'b' ?
                        <div className='imageHandler'>
                            <div className='circle'>
                                {
                                    beginner.map((obj, idx) => {
                                        return (
                                            <>
                                                <p className={obj.point} style={obj.pStyle} ></p>
                                                <label style={obj.lStyle} onClick={() => clickPoint(obj, idx)}>{obj.point}</label>
                                            </>
                                        )
                                    })
                                }
                                {/* <LineTo className='line' from="origin" to="p3" /> */}
                                <SteppedLineTo className='line' delay={3} from={point[0]} to={point[1]} orientation="h" />
                                <SteppedLineTo className='line' delay={3} from={point[1]} to={point[2]} orientation="h" />
                            </div>
                        </div>
                    :
                    dif == 'i' ?
                        <div className='imageHandler'>
                            <div className='circle'>
                                {
                                    intermediate.map((obj, idx) => {
                                        return (
                                            <>
                                                <p className={obj.point} style={obj.pStyle} ></p>
                                                <label style={obj.lStyle} onClick={() => clickPoint(obj, idx)}>{obj.point}</label>
                                            </>
                                        )
                                    })
                                }
                                {/* <LineTo className='line' from="origin" to="p3" /> */}
                                <SteppedLineTo className='line' delay={3} from={point[0]} to={point[1]} orientation="h" />
                                <SteppedLineTo className='line' delay={3} from={point[1]} to={point[2]} orientation="h" />
                            </div>
                        </div>
                    :
                    dif == 'a' ?
                        <div className='imageHandler'>
                            <div className='circle'>
                                {
                                    advance.map((obj, idx) => {
                                        return (
                                            <>
                                                <p className={obj.point} style={obj.pStyle} ></p>
                                                <label style={obj.lStyle} onClick={() => clickPoint(obj, idx)}>{obj.point}</label>
                                            </>
                                        )
                                    })
                                }
                                {/* <LineTo className='line' from="origin" to="p3" /> */}
                                <SteppedLineTo className='line' delay={3} from={point[0]} to={point[1]} orientation="h" />
                                <SteppedLineTo className='line' delay={3} from={point[1]} to={point[2]} orientation="h" />
                            </div>
                        </div>
                    :
                    'no'           
                }
                {
                        dif == 'a'?
                        <div className='row'>
                            <div>
                                <h6>Diameter =</h6>
                            </div>
                            <div style={{display:'flex'}}>
                                <img src={backward} onClick={()=>setCounter(counter-1)}/>
                                <h6>{counter}</h6>
                                <img src={forward} onClick={()=>setCounter(counter+1)}/>
                            </div>
                            <div className='sign'>
                                <h6>X</h6>
                            </div>
                            <div style={{backgroundColor:'rgb(0,255,255,0.2)',border:'1px solid rgb(0,255,255)'}} ref={dropRef}>
                                <h6 style={{textDecoration:'overline'}}>
                                {   
                                    basket.map((obj,idx)=>{
                                        return(
                                            <Alphabets 
                                                point = {obj.point}
                                                close={()=>Delete(obj,idx)}
                                            />
                                        )
                                    })
                                }
                                </h6>
                            </div>
                            <div>
                                <h6 className='btn-check' onClick={() => check()}><i className='fa fa-paper-plane'></i></h6>
                            </div>
                        </div>
                        :
                        <div className='row'>
                            <div>
                                <h6>Diameter</h6>
                            </div>
                            <div style={{backgroundColor:'rgb(0,255,255,0.2)',border:'1px solid rgb(0,255,255)'}} ref={dropRef}>
                                <h6 style={{textDecoration:'overline'}}>
                                {   
                                    basket.map((obj,idx)=>{
                                        return(
                                            <Alphabets 
                                                point = {obj.point}
                                                close={()=>Delete(obj,idx)}
                                            />
                                        )
                                    })
                                }
                                </h6>
                            </div>
                            <div>
                                <h6 className='btn-check' onClick={() => check()}><i className='fa fa-paper-plane'></i></h6>
                            </div>
                        </div>
                }
                <div className='dragrow'>
                            <div>
                                <h6>
                                    {   
                                    dif == 'b'?
                                        beginner.map((obj,idx)=>{
                                            return(
                                                <Alphabets 
                                                    point = {obj.point}
                                                />
                                            )
                                        })
                                    :
                                    dif == 'i'?
                                        intermediate.map((obj,idx)=>{
                                            return(
                                                <Alphabets
                                                    point = {obj.point}
                                                />
                                            )
                                        })
                                    :
                                    dif == 'a'?
                                        advance.map((obj,idx)=>{
                                            return(
                                                <Alphabets
                                                    point = {obj.point}
                                                />
                                            )
                                        })
                                    :
                                    'no'
                                    }
                                    
                                </h6>
                            </div>
                </div>
            </div>
        
    );
}

export default DragDrop;
