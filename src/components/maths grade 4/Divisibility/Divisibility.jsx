import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import problemGenerator from './problemGenerator';
import Items from './Items';
import './Divisibility.css';
import { evaluate } from '../../../utils/math';
import array1 from '../../grade3Maths/Geometry/Radius/positionarray';


function Divisibility(props){
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [basket, setBasket] = useState([]);
    const [boolean,setBoolean] = useState(false);

    const AddinBasket = (obj,idx) => {
        setBasket([...basket,obj]);
    }
    
    useEffect(() => {
        if(problem.divisibleNumber=='2'){
            basket.forEach((obj,idx)=>{
                var array = obj.toString().split('');
                if((array[array.length-1] === '0')||(array[array.length-1] === '2')||(array[array.length-1] === '4')||(array[array.length-1] === '6')||(array[array.length-1] === '8')){
                    setBoolean(!boolean);
                }else{
                    setBoolean(false);
                }
            })
        }
        else if(problem.divisibleNumber=='3'){
            basket.forEach((obj,idx)=>{
                var array = obj.toString().split('');
                array = array.map(Number);
                var sum = array.reduce((partialSum, a) => partialSum + a,0);
                if(sum%3==0){
                    setBoolean(!boolean);
                }else{
                    setBoolean(false);
                }
            })
        }
        else if(problem.divisibleNumber=='5'){
            basket.forEach((obj,idx)=>{
                var array = obj.toString().split('');
                if((array[array.length-1] === '0')||(array[array.length-1] === '5')){
                    setBoolean(!boolean);
                }else{
                    setBoolean(false);
                }
            })
        }
        else if(problem.divisibleNumber=='10'){
            basket.forEach((obj,idx)=>{
                var array = obj.toString().split('');
                if((array[array.length-1] === '0')){
                    setBoolean(!boolean);
                }else{
                    setBoolean(false);
                }
            })
        }
    }, [basket]);

    
    const evaluate = () => {
        if(boolean==true){
            props.onCorrectAnswer();
        }else{
            props.onWrongAnswer();
        }
    }
    console.log(boolean)
    return(
        <div>
            <div className='DivisibililtyQuestion'>
                <h6>
                    {problem.question}
                </h6>
                <div className='DivisibilityGameScreen'>
                    {
                        problem.numbers.map((obj,idx)=>{
                            return(
                                <Items
                                    Key = {idx}
                                    number = {obj}
                                    AddinBasket = {()=>AddinBasket(obj,idx)}
                                />
                                )
                            })
                        }
                    <div className='DisplayDivisibility'>
                        {
                            basket.map((obj,idx)=>{
                                return(
                                    <Items
                                        Key = {idx}
                                        number = {obj}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className='checkDivisiility' onClick={()=>evaluate()}>
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divisibility;