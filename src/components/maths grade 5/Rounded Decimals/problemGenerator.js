import React from 'react';
import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
var Fraction = require('fractional').Fraction;

const getFraction = (start, end) => {
    let random = Math.random()*end;
    let number = random.toFixed(2)
    // console.log(number);

    var frac = new Fraction(number);
    var percentage = number*100;
    var round = Math.round(number)

    return {numerator : frac.numerator , denominator : frac.denominator , decimal : number , percentage : percentage , round : round};
}

function generate(){
    let problem = {
        question : '',
        fraction : {}
    }

    if(dif == 'b'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(1,10)}
    }
    if(dif == 'i'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(11,22)}
    }
    if(dif == 'a'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(11,22)}
    }
    return problem
}

export default {generate}