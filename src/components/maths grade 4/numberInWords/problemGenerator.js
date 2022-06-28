import { toWords } from 'number-to-words'
import getURLParams from '../../../utils/getURLParams'
const generateBasicQuestion = () => {
    return parseInt(Math.random() * (300000 - 100000) + 100000)
}
const generateIntermediateQuestion = () => {
    return parseInt(Math.random() * (600000 - 300000) + 300000)
}
const generateMasterQuestion = () => {
    return parseInt(Math.random() * (2000000 - 500000) + 500000)
}
const solve = (number) => {
    return toWords(number)
}

const generate = () => {
    var number, answer;
    if (getURLParams.dif == 'b') {
        number = generateBasicQuestion()
        
    }
    else if (getURLParams.dif == 'i') {
        number = generateIntermediateQuestion()
    }
    else {
        number = generateMasterQuestion()
    }
    answer = solve(number)
    const question = "What is " + number + " in words?"
    const options = getOptions(answer)
    return { question, answer, number, options }
}
const getOptions = (answer) => {
    var options = answer.split(' ')
    while (options.length < 31) {
        var option = solve(generateBasicQuestion()).split(' ')
        option.map(val => {
            options.push(val)
        })
    }
    if (options.length > 30) {
        options = options.slice(0, 30)
    }
    options = options.sort(() => .5 - Math.random())

    return options
}
export default {
    generate
}