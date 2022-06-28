import React, {useEffect} from 'react';
import { useDrop } from "react-dnd";
import problemGenerator from './problemGenerator';
import Items from './Items';
import './PIMP.css';
import { evaluate } from '../../../utils/math';

export default function Main(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate());
    const [numerator, setNumerator] = React.useState(problem.numerator);
    const [denominator, setDenominator] = React.useState(problem.denominator);
    let [fraction, setFraction] = React.useState(numerator.map((obj,idx)=>{
        return {n : obj , d : denominator[idx]}
    }));
    
    // fraction = fraction.sort(() => 0.5 - Math.random(0));

    var [basket1,setBasket1] = React.useState([]);
    var [basket2,setBasket2] = React.useState([]);

    const [checkProper,setCheckProper] = React.useState(true);
    const [checkImProper,setCheckImProper] = React.useState(true);

    const [{ isOver1 }, dropRef1] = useDrop({
        accept: 'fraction',
        drop: (item) => setBasket1((basket1) =>[...basket1, item]),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });
    
    const [{ isOver2 }, dropRef2] = useDrop({
        accept: 'fraction',
        drop: (item) => setBasket2((basket2) =>[...basket2, item]),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });

    
    useEffect(()=>{
        basket1.forEach(
            CheckProperFraction
            );
            
        basket2.forEach(
            CheckImproperFraction
        );
    },[basket2,basket1]);
    
    const CheckProperFraction = (item,index) => {
        if(item.n > item.d){
            setCheckProper(false)
        }
    }
    const CheckImproperFraction = (item,index) => {
        if(item.n < item.d){
            setCheckImProper(false)
        //    props.onWrongAnswer()
        }
    }
    // console.log(checkProper);
    // console.log(checkImProper);
    const evaluate = () => {
        if(!checkProper || !checkImProper){
            props.onWrongAnswer()
        }else{
            props.onCorrectAnswer()
        }
    }
    console.log('Proper '+ checkProper);
    console.log('ImProper '+ checkImProper);
    return (
        <div>
            <div className='PIMPQuestion'>
                <h6>{problem.question}</h6>
            </div>
            <div className='PIMPBoard'>
                <div className='fractionBoard'>
                    <div className='header'>
                        <h6>Proper Fraction</h6>
                    </div>
                    <div className='dropTarget' ref={dropRef1}>
                        {
                            basket1.map((obj,idx)=>{
                                return(
                                    <Items
                                        numerator = {obj.n}
                                        denominator = {obj.d}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='fractionBoard'>
                    <div className='header'>
                        <h6>Improper Fraction</h6>
                    </div>
                    <div className='dropTarget' ref={dropRef2}>
                        {
                            basket2.map((obj,idx)=>{
                                return(
                                    <Items 
                                        numerator = {obj.n}
                                        denominator = {obj.d}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='PIMPTiles'>
                {
                    fraction.map((obj,idx)=>{
                        return(
                            <Items 
                                numerator = {obj.n}
                                denominator = {obj.d}
                            />
                        )
                    })
                }
            </div>
            <div className='PIMPcheck' onClick={()=>evaluate()}>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    )
}
