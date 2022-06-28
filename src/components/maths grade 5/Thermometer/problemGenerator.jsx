import React from 'react';
import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
console.log(dif);

const getNum = (min,max) => {
    let n = Math.floor(Math.random()*max)+min
    console.log(n)
    return n
}


const convertToScale = (num) =>{
    let valNum = parseFloat(num);
    let toCel = ((valNum-32)/1.8).toFixed(2);

    let toFer = ((toCel*1.8)+32).toFixed(2);

    console.log('C'+toCel);
    console.log('F'+toFer);

    
    return {toCel , toFer , status : true};
}


const getOpt = (ans) => {
    let correct = ans;
    // let ran = parseInt(Math.random()*100)
    let opt = Array(3).fill().map(()=>{
        return(
            {
                toCel : parseInt(Math.random()*100),
                toFer : parseInt(Math.random()*100),
                status : false
            }
        )
    })

    opt.push(correct);

    // console.log(opt);

    return opt;
}
const generate = () => {
    let problem = {
        question : '',
        number : null,
        scale : {},
        options : null
    }

    
    if(dif == 'b'){
        problem = {...problem , question : 'Convert the temperatue from celcius scale to ferenhite scale'}
        problem = {...problem , number : getNum(1,50)}
        problem = {...problem , scale : convertToScale(problem.number)}
        problem = {...problem , options : getOpt(problem.scale)}
    }
    else if(dif == 'i'){
        problem = {...problem , question : 'Convert the temperatue from ferenhite scale to celcius scale'}
        problem = {...problem , number : getNum(1,50)}
        problem = {...problem , scale : convertToScale(problem.number)}
        problem = {...problem , options : getOpt(problem.scale)}
    }
    else if(dif == 'a'){
        problem = {...problem , question : 'Convert the temperatue from ferenhite scale to celcius scale'}
        problem = {...problem , number : getNum(1,50)}
        problem = {...problem , scale : convertToScale(problem.number)}
        problem = {...problem , options : getOpt(problem.scale)}
    }

    return problem
}

export default {generate}