import React from 'react';
import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const getNumbers = (start , end) => {
    let number = Math.floor(Math.random()*end)+start;
    // console.log(number)
    return number;
}

const getAnswer = (breadth , length) => {
    let options = Array(3).fill().map(()=>({num : Math.floor(Math.random() * 20) + 10 , correct : false}))
    let correctAnswer = {
        num : parseInt(breadth*length),
        correct : true
    }
    
    let f_options = [...options , { num : parseInt(breadth*length),correct : true}];
    console.log(f_options)
    return f_options;
}
function generate(){
    let problem = {
        question : '',
        columns : null,
        rows : null,
        answer: []
    }

    if(dif == 'b'){
        problem = {...problem , columns : getNumbers(1 , 5)}
        problem = {...problem , rows : getNumbers(1,5)}
        problem = {...problem , question : `Find the area of the shape whose rectangle length is ${problem.rows} and breadth is ${problem.columns} by making small unit squares`}
        problem = {...problem , answer : getAnswer(problem.columns , problem.rows)}
    }

    return problem
}

export default {generate}