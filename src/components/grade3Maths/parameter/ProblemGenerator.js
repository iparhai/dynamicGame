import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start,end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const generate = () => {
    let problem = {
        lineAB : [],
        lineBC : [],
        question : ''
    }

    if(dif == 'b'){
        problem = {...problem, lineAB:range(1,5)}
        if(lang == 'e'){
            problem = {...problem, question: 'Find the parameter of the following Square'}
        }else if(lang == 'u'){
            problem = {...problem, question: 'درج ذیل مربع کا پیرامیٹر تلاش کریں۔'}
        }
    }
    else if(dif == 'i'){
        problem = {...problem,lineAB:range(1,5)}
        problem = {...problem,lineBC:range(6,10)}
        if(lang == 'e'){
            problem = {...problem, question: 'Find the parameter of the following Rectangle'}
        }else if(lang == 'u'){
            problem = {...problem, question: 'درج ذیل مستطیل کا پیرامیٹر تلاش کریں۔'}
        }
    }
    else{
        problem = {...problem,lineAB:range(10,15)}
        problem = {...problem,lineBC:range(16,20)}
        if(lang == 'e'){
            problem = {...problem, question: 'Find the parameter of the following Rectangle'}
        }else if(lang == 'u'){
            problem = {...problem, question: 'درج ذیل مستطیل کا پیرامیٹر تلاش کریں۔'}
        }
    }

    return problem
}

export default {generate};