import React from 'react';
import getURLParams from '../../../utils/getURLParams';
import { getDefaultNormalizer } from '@testing-library/react';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const sequence = (unsorted) => {
    let newsorted = unsorted.sort((a,b)=>a-b);
    return newsorted
}

const getData = (length , max) => {
    let unsorted = Array(length).fill().map(()=>Math.floor(Math.random()*max)+1);
    return sequence(unsorted)
}

const getString = (arr) =>{
    let dummy = [];
    let ending = arr.length-1;
    arr.forEach((obj,i)=>{
        if(i==ending){
            dummy.push(`and ${obj}`)
        }else{
            dummy.push(`${obj}, `)
        }
    })

    let str = dummy.join('')
    return str
}

const getAnswer = (data) => {
    let array = data;
    let length = array.length;
    let sum = array.reduce((partialSum, a) => partialSum + a, 0);
    let ans = sum /length;

    return ans.toFixed(1)
}

const getOptions = (ans) => {
    let opt = [
        {
            answer : ans
        },
        {
            answer : Math.floor(Math.random()*10)+1
        },
        {
            answer : Math.floor(Math.random()*15)+5
        },
        {
            answer : Math.floor(Math.random()*20)+10
        }
    ].sort(() => Math.random() - 0.5);

    return opt;
}

const generate = () => {
    let problem = {
        question : '',
        data : [],
        string : '',
        answer : null,
        options : []
    }

    if(dif == 'b'){
        problem = {...problem , data : getData(5,15)}
        problem = {...problem , string : getString(problem.data)}
        problem = {...problem , question : `Find the average(mean) of the following numbers`}
        problem = {...problem , answer : getAnswer(problem.data)}
        problem = {...problem , options : getOptions(problem.answer)}
    }
    else if(dif == 'i'){
        problem = {...problem , data : getData(7,20)}
        problem = {...problem , string : getString(problem.data)}
        problem = {...problem , question : `Find the average(mean) of the following numbers`}
        problem = {...problem , answer : getAnswer(problem.data)}
        problem = {...problem , options : getOptions(problem.answer)}
    }
    else if(dif == 'a'){
        problem = {...problem , data : getData(5,25)}
        problem = {...problem , string : getString(problem.data)}
        problem = {...problem , question : `Find the average(mean) of the following numbers`}
        problem = {...problem , answer : getAnswer(problem.data)}
        problem = {...problem , options : getOptions(problem.answer)}
    }

    return problem
}

export default {generate};