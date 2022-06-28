import React from 'react';
import getURLParams from '../../../utils/getURLParams';
import Fraction from '../../grade3Maths/identifyFraction/Fraction';

const lang = getURLParams.lang;
const dif = getURLParams.dif;


function CheckFraction(numerator, denominator){
    let num = numerator;
    let den = denominator;
    
    if(num<den){
        num++
        if(num == den){
            den++
        }
    }else if(num%den == 0){
        num--
        den++
    }else if(num%den == 1){
        num--
        den++
    }

    return {num,den}
}


function GenerateFraction(n1,n2){
    let array = [];
    while(n1<=n2){
        array.push(n1);
        n1++
    }
    
    // To pick numerator and denominator from array randomly
    let r1 = Math.floor(Math.random()*array.length);
    let r2 = Math.floor(Math.random()*array.length);
    
    if(r1 == r2){
        r1 = +1
        r2 = r2
    }
    else{
        r1 = r1
        r2 = r2
    }

    let fraction = CheckFraction(array[r1], array[r2]);


    return fraction;
}
function GenerateOptions(ans, num){
    let opt = [
        {
            numerator: ans.numerator+2,
            denominator : ans.denominator-1,
        },
        {
            numerator: ans.numerator+5,
            denominator : ans.denominator-10,
        },
        {
            numerator: ans.numerator-4,
            denominator : ans.denominator-10,
        },
        // ans
        {
            numerator : ans.numerator,
            denominator : ans.denominator,
        }
    ].sort(()=>Math.random()-0.5);
    
    return opt
}

function generate(){
    var Fraction = require('fractional').Fraction;
    let problem = {
        fraction1 : '',
        fraction2 : '',
        question : 'Divide the fraction',
        options : null,
        answer : ''
    } 

    if(dif == 'b'){
        problem = {...problem, fraction1 : GenerateFraction(1,5) }
        problem = {...problem, fraction2 : GenerateFraction(1,5) }
        problem = {...problem, answer : (new Fraction(problem.fraction1.num,problem.fraction1.den)).divide(new Fraction(problem.fraction2.num,problem.fraction2.den))}
        problem = {...problem, options : GenerateOptions(problem.answer,5)}
    }
    else if(dif == 'i'){
        problem = {...problem, fraction1 : GenerateFraction(5,9) }
        problem = {...problem, fraction2 : GenerateFraction(5,9) }
        problem = {...problem, answer : (new Fraction(problem.fraction1.num,problem.fraction1.den)).divide(new Fraction(problem.fraction2.num,problem.fraction2.den))}
        problem = {...problem, options : GenerateOptions(problem.answer,5)}
    }
    else if(dif == 'a'){
        problem = {...problem, fraction1 : GenerateFraction(1,9) }
        problem = {...problem, fraction2 : GenerateFraction(1,9) }
        problem = {...problem, answer : (new Fraction(problem.fraction1.num,problem.fraction1.den)).divide(new Fraction(problem.fraction2.num,problem.fraction2.den))}
        problem = {...problem, options : GenerateOptions(problem.answer,5)}
    }

    const translate = {
        e : `Divide the fraction ${problem.fraction2.num}/${problem.fraction2.den} with ${problem.fraction1.num}/${problem.fraction1.den}`,
        u : `کسر ${problem.fraction2.num}/${problem.fraction2.den} کو ${problem.fraction1.num}/${problem.fraction1.den} سے تقسیم کریں۔`,
        a : `اقسم الكسر ${problem.fraction2.num} / ${problem.fraction2.den} على ${problem.fraction1.num} / ${problem.fraction1.den}`,
        p : `${problem.fraction2.num}/${problem.fraction2.den} د ${problem.fraction1.num}/${problem.fraction1.den} سره تقسیم کړئ`,
        k : `분수 ${problem.fraction2.num}/${problem.fraction2.den}을 ${problem.fraction1.num}/${problem.fraction1.den}으로 나눕니다.`
    } 
    if (lang == 'a') {
        problem = { ...problem, question: translate.a }
    } else if (lang == 'u') {
        problem = { ...problem, question: translate.u }
    } else if (lang == 'p') {
        problem = { ...problem, question: translate.p }
    } else if(lang == 'k') {
        problem = { ...problem, question: translate.k }
    } else{
        problem = { ...problem, question: translate.e }
    }


    return problem;;
}

export default {generate};