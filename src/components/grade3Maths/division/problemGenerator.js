import getURLParams from "../../../utils/getURLParams"

const getRand = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
}
const getNumerator = (multiplier, denominator) => {
    return multiplier * denominator
}
const getRange = (dif) => {
    return dif == 'm' ? { min: 700, max: 999 } : dif == 'i' ? { min: 300, max: 700 } : { min: 100, max: 300 }
}
const generate = () => {
    const dif = getURLParams.dif
    let range = getRange(dif)

    let firstNumber;
    let secondNumber;
    let question;

    secondNumber = getRand(range.min, range.max);
    firstNumber = getNumerator(getRand(range.min, range.max), secondNumber)
    question = firstNumber + " ÷ " + secondNumber + " = ?"

    const answer = firstNumber / secondNumber
    const problem = {
        question,
        firstNumber,
        secondNumber,
        answer
    }
    return problem
}
const getRandomOption = (dif) => {
    const max = dif == 'b' ? 300 : dif == 'i' ? 700 : 999
    const min = dif == 'b' ? 100 : dif == 'i' ? 300 : 700
    return parseInt(Math.random() * (max - min) + min)
}

const getOptions = (answer) => {
    const options = []
    const dif = getURLParams.dif
    for (let i = 0; i < 4; i++) {
        options.push(getRandomOption(dif) + parseInt(answer * Math.random()))
    }
    let randomIndex = parseInt(Math.random() * options.length)
    options[randomIndex] = answer
    return options
}
export default {
    generate,
    getOptions
}