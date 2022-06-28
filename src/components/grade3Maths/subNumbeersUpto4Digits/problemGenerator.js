import getURLParams from "../../../utils/getURLParams"

const dif = getURLParams.dif
const getNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed()
}
const generate = () => {
    let problem = {
        upper: 0,
        lower: 0,
        ans: 0,
        question: ""
    }
    problem = { ...problem, question: "Subtract the following numbers" }

    if (dif == 'b') {
        problem = { ...problem, upper: getNumber(2000, 10000) }
        problem = { ...problem, lower: getNumber(2000, 10000) }
    }
    else if (dif == 'i') {
        problem = { ...problem, upper: getNumber(10000, 100000) }
        problem = { ...problem, lower: getNumber(10000, 100000) }
    }
    else {
        problem = { ...problem, upper: getNumber(100000, 999999) }
        problem = { ...problem, lower: getNumber(100000, 999999) }
    }
    if (parseInt(problem.upper) < parseInt(problem.lower)) {
        const lower = problem.upper
        const upper = problem.lower
        problem = { ...problem, upper: upper, lower: lower }
    }
    problem = { ...problem, ans: parseInt(problem.upper) - parseInt(problem.lower) }
    return problem
}
export default {
    generate
}