import getURLParams from "../../../utils/getURLParams";
import line1 from './images/line1.png';
import line2 from './images/line2.png';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const generate = () => {
    let problem = {
        numbers: [],
        random : '',
        background: '',
        question: ''
    }

    

    if (dif == 'b') {
        problem = { ...problem, numbers: range(1, 10) }
        // problem = { ...problem, random: problem.numbers[Math.floor(Math.random() * problem.numbers.length)] }
        problem = { ...problem, background: `${line1}` }
    }
    else if (dif == 'i') {
        problem = { ...problem, numbers: range(1, 10) }
        // problem = { ...problem, num: problem.numbers[random] }
        problem = { ...problem, background: `${line1}` }
    }
    else {
        problem = { ...problem, numbers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }
        // problem = { ...problem, num: problem.numbers[random] }
        problem = { ...problem, background: `${line2}` }
    }



    problem  = {...problem, random : problem.numbers[Math.floor(Math.random()*problem.numbers.length)]}
    
    const translate = {
        e: `Represent ${problem.random} on the number line`,
        a: `تمثل ${problem.random} على خط الأعداد`,
        p: `د شمیرې په کرښه کې ${problem.random} استازیتوب وکړئ`,
        u: `نمبر لائن پر ${problem.random} کی نمائندگی کریں۔`,
        k : `숫자 줄에 ${problem.random} 을 나타냅니다.`
    }
    
    if (lang == 'a') {
        problem = { ...problem, question: translate.a }
    } else if (lang == 'u') {
        problem = { ...problem, question: translate.u }
    } else if (lang == 'p') {
        problem = { ...problem, question: translate.p }
    } else if(lang == 'k') {
        problem = { ...problem, question: translate.k }
    } else{
        problem = { ...problem, question: translate.e }
    }
    return problem
}

export default { generate };