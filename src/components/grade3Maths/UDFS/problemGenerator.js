import getURLParams from "../../../utils/getURLParams";
import teeth1 from './images/teeth.png';
import teeth2 from './images/teeth2.png';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const numerator = [];
for(var j=0;j<=10;j++){
  numerator.push(2*j+1);
}
const denominator=[];
for(var i=11;i<=20;i++){
  denominator.push(i*2);
}
const fraction = numerator.map((obj,idx)=>{
  return { n: obj, d: denominator[idx]}
})

const Rindex = Math.floor(Math.random()*fraction.length);


const generate = () => {
    let problem = {
        numerator : [],
        denominator : [],
        background : '',
        
        question : ''
    }
    
    problem = {...problem, question:'Subtract the fractions'}
    
    if(dif == 'b'){
        problem = {...problem, numerator:range(1,5)}
        problem = {...problem, denominator:range(11,15)}
        problem = {...problem, background : `${teeth1}`}
    }
    else if(dif == 'i'){
        problem = {...problem,numerator:range(5,10)}
        problem = {...problem,denominator:range(15,20)}
        problem = {...problem,background : `${teeth2}`}
    }
    else{
        problem = {...problem,numerator:range(1,10)}
        problem = {...problem,denominator:range(11,20)}
        problem = {...problem,background : `${teeth1}`}
    }

    return problem
}

export default {generate};