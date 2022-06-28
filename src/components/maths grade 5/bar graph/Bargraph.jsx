import React, { useState, useEffect, useContext } from 'react';
import problemGenerator from './problemGenerator';
import getURLParams from '../../../utils/getURLParams';
import { Data } from './Data';
import {
    QuestionHolder,
    Container,
    MainContainer,
    BlackLine,
    BarChartContainer,
    Number,
    MakeBar,
    Holder2,
    MakeRadio
} from './style';
import graphPaper from './images/paper1.png';


let dif = getURLParams.dif;
function Bargraph(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [barData, setBarData] = useState(problem.data);
    const [random, setRandom] = useState(Math.floor(Math.random()*barData.length));
    const [subQuestion, setSubQuestion] = useState('');
    const Validate = (obj) => {
            if(obj.values == barData[random].values){
                props.onCorrectAnswer();
            }else{
                props.onWrongAnswer();
            }
    }
    const MakeHeight = (obj) => {
        if(dif == 'b')
            return obj.number*2
        else if(dif == 'i')
            return obj.number*3
        else
            return obj.number*5
    }
    useEffect(()=>{
        if(dif == 'b')
            setSubQuestion(`1. How many children ate ${barData[random].values}?`)
        else if(dif == 'i')
            setSubQuestion(`1. How many ${barData[random].values} are there?`)
        else 
            setSubQuestion(`1. How much did ${barData[random].values} study in classroom?`)
    },[])
    
    return (
        <>
        <QuestionHolder>
            <h6>{question}</h6>
            <h6>{subQuestion}</h6>
        </QuestionHolder>
        <Container paper={graphPaper}>
            <MainContainer>
                {
                    barData.map((obj, idx) => {
                        return (
                            <div 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                            onClick={()=>Validate(obj)}>
                                {/* <Number color={'red'}>{obj.number}</Number> */}
                                <MakeBar
                                    // height={obj.number * 2}
                                    height={()=>MakeHeight(obj)}
                                    colors={obj.colors}
                                >
                                    {obj.number}
                                </MakeBar>
                            </div>
                        )
                    })
                }
            </MainContainer>
            <BlackLine />
        </Container>
        <Holder2>
            {
                barData.map((obj,idx)=>{
                    return(
                        <div style={{display : 'flex'}}>
                            {/* <div style={{width : '5%', height : '5vh' , backgroundColor : 'red'}}>
                            </div> */}
                            <MakeRadio colors = {obj.colors}></MakeRadio>
                            <div style={{marginLeft:'1%'}}><h6>{obj.values}</h6></div>
                        </div>
                    )
                })
            }
        </Holder2>
        </>
    )
}

export default Bargraph;