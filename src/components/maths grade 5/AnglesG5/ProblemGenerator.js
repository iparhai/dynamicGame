import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const generate = () => {
    let problem = {
        angles: [],
        question: ''
    }

    // problem = { ...problem, question: 'Draw the angle with the help of protractor i.e.' }

    if (dif == 'b') {
        problem = { ...problem, angles: [{ angle: 10, answer: 80 }, { angle: 20, answer: 70 }, { angle: 30, answer: 60 }, { angle: 40, answer: 50 }, { angle: 45, answer: 55 }, { angle: 60, answer: 30 }, { angle: 80, answer: 10 }, { angle: 90, answer: 0 }, { angle: 120, answer: 330 }, { angle: 145, answer: 305 }] }
    }
    else if (dif == 'i') {
        problem = { ...problem, angles: [{ angle: 'right angle' }, { angle: 'acute angle' }, { angle: 'obtuse angle' }] }
    }
    else {
        problem = { ...problem, angles: [] }
    }

    const translate = {
        e: `Draw the angle with the help of protractor i.e.`,
        a: `ارسم الزاوية بمساعدة منقلة أي`,
        p: `زاویه د پروټیکټر په مرسته رسم کړئ`,
        u: `پروٹریکٹر کی مدد سے زاویہ کھینچیں یعنی`,
        k: `각도기의 도움으로 각도를 그립니다.`
    }

    if (lang == 'a') {
        problem = { ...problem, question: translate.a }
    } else if (lang == 'u') {
        problem = { ...problem, question: translate.u }
    } else if (lang == 'p') {
        problem = { ...problem, question: translate.p }
    } else if (lang == 'k') {
        problem = { ...problem, question: translate.k }
    } else {
        problem = { ...problem, question: translate.e }
    }


    return problem
}

export default { generate };