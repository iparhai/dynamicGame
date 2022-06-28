import getURLParams from "../../../utils/getURLParams";
import {fraction,number} from 'mathjs';
import teeth1 from './images/teeth.png';
import teeth2 from './images/teeth2.png';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const generate = () => {
    let problem = {
        numerator : [],
        denominator : [],
        background : '',
        operator : '',
        question : ''
    }
    
    
    if(dif == 'b'){
        problem = {...problem, numerator:range(1,5)}
        problem = {...problem, denominator:range(1,6)}
        problem = {...problem, background : `${teeth1}`}
        problem = {...problem, operator : '-'}
        problem = {...problem, question:'Subtract the fractions'}
    }
    else if(dif == 'i'){
        problem = {...problem,numerator:range(1,5)}
        problem = {...problem,denominator:range(1,6)}
        problem = {...problem,background : `${teeth2}`}
        problem = {...problem, operator : '+'}
        problem = {...problem, question:'Add the fractions'}
    }
    else{
        problem = {...problem,numerator:range(1,5)}
        problem = {...problem,denominator:range(1,6)}
        problem = {...problem,background : `${teeth1}`}
        problem = {...problem, operator : '+'}
        problem = {...problem, question:'Add the fractions'}
    }

    return problem
}

export default {generate};