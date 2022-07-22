import React from 'react';
import {ToWords} from 'to-words';
import getURLParams from '../../../utils/getURLParams';
import { getDefaultNormalizer } from '@testing-library/react';

const dif = getURLParams.dif;
const lang = getURLParams.lang;
var converter = require('number-to-words');

let entities = ['Natasha', 'Nancy' , 'Amanda' , 'Nathan' , 'Brandon'];
const getData = (length,max) => {
    let dummy = Array(length).fill().map(()=>Math.round(Math.random()*max));
    let updated = [];

    dummy.forEach((el,idx)=>{
        if(el==0){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }else if(el == 1){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }
        else if(el==2){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }
        else if(el==3){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }
        else if(el==4){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }
        else if(el==5){
            updated = [...updated , {name:[converter.toWords(el)], number:[el]}]
        }
        else if(el>5 && el<=10){
            let orig = el;
            let n1 = orig-5;
            let n2 = orig-n1;
            
            updated = [...updated , {name:[converter.toWords(n1),converter.toWords(n2)],number:[n1,n2]}]
        }
        else if(el>10 && el<=15){
            let orig = el;
            let n1 = orig-10;
            let n2 = 5;
            let n3 = 5;
             
            updated = [...updated , {name:[converter.toWords(n1),converter.toWords(n2),converter.toWords(n3)],number:[n1,n2,n3]}]
        }
    })
    
    let newData = updated.map((v,idx)=>({...v , entity : entities[idx]}))

    return newData
}

const getAnswer = (n , d) => {
    let array = d;
    let name = n;
    let ans = null;
    array.forEach((obj,idx)=>{
        if(obj.entity === name){
            ans = obj.number.reduce(function(acc, val) { return acc + val; }, 0)
        }
    })
    
    return ans
}

const getOptions = (ans , length) => {
    let opt = [
        {
            a : ans
        },
        {
            a : ans+2
        },
        {
            a : ans+4
        },
        {
            a : ans+10
        }
    ].sort(() => Math.random() - 0.5);

    return opt
}
function generate(){
    let problem = {
        questions : [],
        data : [],
        answer : null,
        options : [],
        name : entities[Math.floor(Math.random()*5)],
    }
    let randomName = entities[Math.floor(Math.random()*5)];
    if(dif == 'b'){
        problem = {...problem , data : getData(5,5)}
        problem = {...problem , questions : `How many books does ${randomName} have?`}
        problem = {...problem , answer : getAnswer(randomName,problem.data)}
        problem = {...problem , options : getOptions(problem.answer , 4 )}
    }
    else if(dif == 'i'){
        problem = {...problem , data : getData(5,10)}
        problem = {...problem , questions : `How many books does ${randomName} have?`}
        problem = {...problem , answer : getAnswer(randomName,problem.data)}
        problem = {...problem , options : getOptions(problem.answer , 4 )}
    }
    else if(dif == 'a'){
        problem = {...problem , data : getData(5,15)}
        problem = {...problem , questions : `How many books does ${randomName} have?`}
        problem = {...problem , answer : getAnswer(randomName,problem.data)}
        problem = {...problem , options : getOptions(problem.answer , 4 )}
    }

    const translate = {
        e: `How many books does ${randomName} have?`,
        a: `${randomName}؟ كم عدد الكتب الموجودة في`,
        p: `څومره کتابونه لري؟ ${randomName}`,
        u: `کے پاس کتنی کتابیں ہیں؟ ${randomName}`,
        k : `${randomName}은(는) 몇 권의 책을 가지고 있나요?`
    }
    
    if (lang == 'a') {
        problem = { ...problem, questions: translate.a }
    } else if (lang == 'u') {
        problem = { ...problem, questions: translate.u }
    } else if (lang == 'p') {
        problem = { ...problem, questions: translate.p }
    } else if(lang == 'k') {
        problem = { ...problem, questions: translate.k }
    } else{
        problem = { ...problem, questions: translate.e }
    }
    return problem
}

export default {generate};