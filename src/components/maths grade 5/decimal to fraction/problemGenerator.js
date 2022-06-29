import React from 'react';
import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
var Fraction = require('fractional').Fraction;

const getFraction = (start, end) => {
    let random = Math.random();
    let number = random.toFixed(2)
    // console.log(number);

    var frac = new Fraction(number);
    // console.log(frac);
    return {numerator : frac.numerator , denominator : frac.denominator , decimal : number};
}

function generate(){
    let problem = {
        question : '',
        fraction : {}
    }

    if(dif == 'b'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(0,0)}
    }
    if(dif == 'i'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(0,0)}
    }
    if(dif == 'a'){
        problem = {...problem , question : 'Write the fractions as decimal number'}
        problem = {...problem , fraction : getFraction(0,0)}
    }
    return problem
}

export default {generate}