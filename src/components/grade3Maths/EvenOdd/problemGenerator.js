import getURLParams from "../../../utils/getURLParams";


const dif = getURLParams.dif;
const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


// const Rindex = Math.floor(Math.random()*fraction.length);


const generate = () => {
    let problem = {
        number : [],
        choice : ['even','odd'],
        question : ''
    }

    problem = {...problem, question:'Hit the number'}

    if(dif == 'b'){
        problem = {...problem, number:range(1,10)}
    }
    else if(dif == 'i'){
        problem = {...problem,number:range(21,30)}
    }
    else{
        problem = {...problem,number:range(85,95)}
    }

    return problem
}

export default {generate};