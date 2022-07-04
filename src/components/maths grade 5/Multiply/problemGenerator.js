import getURLParams from "../../../utils/getURLParams"

const getRand = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
}
const generate = () => {
    const dif = getURLParams.dif

    let firstNumber;
    let secondNumber;
    let question;
    if (dif == 'b') {
        // firstNumber = getRand(10000, 30000)
        // secondNumber = getRand(100, 300)
        firstNumber = getRand(5, 10)
        secondNumber = getRand(5, 10)
        question = firstNumber + " X " + secondNumber + " = ?"

    }
    else if (dif == 'i') {
        firstNumber = getRand(30000, 70000)
        secondNumber = getRand(300, 700)
        question = firstNumber + " X " + secondNumber + " = ?"
    }
    else {
        firstNumber = getRand(60000, 99999)
        secondNumber = getRand(700, 999)
        question = firstNumber + " X " + secondNumber + " = ?"
    }

    const answer = firstNumber * secondNumber
    const problem = {
        question,
        firstNumber,
        secondNumber,
        answer
    }
    return problem
}
const getRandomOption = (dif) => {
    const max = dif == 'b' ? 30 : dif == 'i' ? 60 : 90
    const min = dif == 'b' ? 10 : dif == 'i' ? 10 : 10
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