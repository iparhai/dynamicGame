import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const generate = () => {
    let problem = {
        numbers : [],
        divisible : [2,3,5,10],
        question : ``,
        divisibleNumber : ``,
    }
    let random = Math.floor(Math.random()*problem.divisible.length);
    if(dif == 'b'){
        problem = {...problem, numbers : range(200,210)}
        problem = {...problem, question : `Choose the number which is divisible by ${problem.divisible[random]}`}
        problem = {...problem, divisibleNumber : `${problem.divisible[random]}`}
    }
    else if(dif == 'i'){
        problem = {...problem, numbers : range(300,315)}
        problem = {...problem, question : `Choose the number which is divisible by ${problem.divisible[random]}`}
        problem = {...problem, divisibleNumber : `${problem.divisible[random]}`}
    }
    else if(dif == 'a'){
        problem = {...problem, numbers : range(410,420)}
        problem = {...problem, question : `Choose the number which is divisible by ${problem.divisible[random]}`}
        problem = {...problem, divisibleNumber : `${problem.divisible[random]}`}
    }

    return problem
}

export default {generate};