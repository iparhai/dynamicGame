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
        question_part1 : '',
        question_part2 : ''
    }
    
    problem = {...problem, question_part1:'Convert the improper fraction '}
    problem = {...problem, question_part2:'into the mixed fraction '}

    if(dif == 'b'){
        problem = {...problem, numerator:range(11,20)}
        problem = {...problem, denominator:range(2,9)}
    }
    else if(dif == 'i'){
        problem = {...problem, numerator:range(21,30)}
        problem = {...problem, denominator:range(2,9)}
    }
    else if(dif == 'a'){
        problem = {...problem, numerator:range(31,40)}
        problem = {...problem, denominator:range(2,9)}
    }

    return problem
}

export default {generate};