import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    let array = [];
    for(start;start<=end;start++){
            array.push(start)
    }
    console.log(array);
    return  array;
}

const generate = () => {
    let problem = {
        number1 : [],
        question : ''
    }

    if(dif == 'b'){
        problem = {...problem, number1 : [16,28,27,36,24,56,28,42,44,66,52,78]}
        // problem = {...problem, number2 : range(10,26)}
    }

    return problem
}

export default {generate}