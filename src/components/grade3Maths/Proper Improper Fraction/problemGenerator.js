import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}




const generate = () => {
    let problem = {
        numerator : [],
        denominator : [],
        
        question : ''
    }
    
    problem = {...problem, question:'Choose the correct fractions'}
    
    if(dif == 'b'){
        problem = {...problem, numerator:[2,4,6,2,9,8,1]}
        problem = {...problem, denominator:[9,3,1,5,9,1,3]}
      }
      else if(dif == 'i'){
        problem = {...problem, numerator:[12,14,16,12,19,18,11]}
        problem = {...problem, denominator:[19,13,11,15,19,11,13]}  
      }
      else{
        problem = {...problem, numerator:[22,24,26,22,29,28,21]}
        problem = {...problem, denominator:[29,23,21,25,29,21,23]}
    }

    return problem
}

export default {generate};