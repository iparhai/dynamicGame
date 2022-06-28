import React, { useState, useEffect } from 'react';
import problemGenerator from './problemGenerator';
import $ from 'jquery'
import './Ratio.css';
import nest from './images/nest.png';
import hold from './images/hold.png';
import attack from './images/attack.png';

export default function Ratio(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [ratioData, setRatioData] = useState(problem.data);
    const [answers, setAnswers] = useState(problem.answer);


    useEffect(() => {
        $('.Ratio__OptionsOpt').click(function () {
            // alert('Clicked')
            $('.Ratio__OptionsOpt').css({
                cursor: `url(${attack}),auto`,
                opacity : 0.5
            })
            $(window).mousemove(function () {
                setTimeout(() => {
                    $('.Ratio__OptionsOpt').css({
                        cursor: `url(${hold}),auto`
                    })
                }, 1000)
            });
        })
    })

    const Evaluate = (item) => {
        if(item.status == true){
            setTimeout(()=>{
                props.onCorrectAnswer()
            },2000)
        }else{
            setTimeout(()=>{
                props.onWrongAnswer()
            },2000)
        }
    }
    
    return (
        <>
            <div class='Ratio__question'>
                <h6>{problem.question}</h6>
            </div>
            <div className='Ratio__Holder'>
                {
                    ratioData.map((obj, idx) => {
                        return (
                            <div
                                class="triangle-left"
                                style={{ backgroundColor: `${obj.color}` }}
                            >
                            </div>
                        )
                    })
                }
            </div>
            <div className='Ratio__Options'>
                {
                    answers.map((o, i) => {
                        return (
                            <div className='Ratio__OptionsOpt' onClick={()=>Evaluate(o)}>
                                <img src={nest} />
                                <h3>{o.n1 + ":" + o.n2}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
