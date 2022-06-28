import React,{useState,useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import GlobalState from '../../HintsContext';
import Character from './Character';
import data from './data';

import turtle from './images/turtle.png';
import turtle_left from './images/turtle_left.png';
import right_btn from './images/right.gif';
import left_btn from './images/left.gif';

import './PlaceVal_4.css';

function PlaceVal_4(props){
    const [array,setArray] = useState(data);
    const random_for_array = Math.floor(Math.random()*array.length);
    const [fullNumber,setFullNumber] = useState(array[random_for_array].name);
        
    const random_for_digit =  Math.floor(Math.random()*data[random_for_array].subarray.length);
    const [array2,setArray2] = useState(array[random_for_array].subarray);
    const [digit,setdigit] = useState(array[random_for_array].subarray[random_for_digit]);

    const [userInput,setUserInput] =  useState(0);
    const [direction,setDirection] = useState('r');
    const [validate,setValidate] = useState(0);

    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        setHintState(`Using direction arrows place the turtle on the tile that best matches the answer`)
    });
    

    const goLeft = () => {
        setUserInput(userInput-20);
        setDirection('l')
    }
    const goRight = () => {
        setUserInput(userInput+20);
        setDirection('r');
    }

    const travel = {
        left : 10+userInput+'%'
    }

    const Validate = () => {
        if(userInput==0){
            if(digit == array2[0]){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
        else if(userInput==20){
            if(digit == array2[1]){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
        else if(userInput==40){
            if(digit == array2[2]){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
        else if(userInput==60){
            if(digit == array2[3]){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
        }
    } 
    useEffect(() => {
        if(validate>0){
            Validate()
        }
    }, [validate]);

    useEffect(()=>{
        if(userInput>60){
            setUserInput(60)
        }
        else if(userInput<0){
            setUserInput(0)
        }
    },[userInput])

   console.log(array);
    return(
       <div className='display_game'>
           <div className='display_ques'>
                Place value of <span className='highlited'>{digit}</span> in {fullNumber}
           </div>
            <div className='game_screen'>
                <div className='directionHolder' style={travel}>
                    <img className='left_btn' src={left_btn} onClick={() => goLeft()} />
                    <img className='right_btn' src={right_btn} onClick={() => goRight()} />
                </div>

                {/* <Character className='object' style={travel} /> */}
                <img src={direction=='r'?turtle:turtle_left} style={travel} className='object' />

                <div className='tile thousand'><h5>TH</h5></div>
                <div className='tile hundred'><h5>H</h5></div>
                <div className='tile ten'><h5>T</h5></div>
                <div className='tile one'><h5>O</h5></div>
                <div className='res'
                    onClick={()=>setValidate(validate+1)}
                ><h5><i className='fa fa-paper-plane'></i></h5></div>
            </div>
       </div> 
    )
}

export default PlaceVal_4;