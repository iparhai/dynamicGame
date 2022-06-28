import getURLParams from "../../../utils/getURLParams"


const problem = {
    addition: {
        sign: "+",
        dif: {
            b: {
                range: {
                    min: 10,
                    max: 100
                },
                question: [
                    'Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            i: {
                range: {
                    min: 1000,
                    max: 10000
                },
                question: [
                    'Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            m: {
                range: {
                    min: 10000,
                    max: 1000000
                },
                question: [
                    'Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            }
        }
    },
    subtraction: {
        sign: "-",
        dif: {
            b: {
                range: {
                    min: 10,
                    max: 100
                },
                question: [
                    '- Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '- Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            i: {
                range: {
                    min: 1000,
                    max: 10000
                },
                question: [
                    '- of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '- Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            m: {
                range: {
                    min: 10000,
                    max: 1000000
                },
                question: [
                    '- Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '- Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            }
        }
    }, multiplication: {
        sign: "X",
        dif: {
            b: {
                range: {
                    min: 10,
                    max: 100
                },
                question: [
                    'x Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'x Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            i: {
                range: {
                    min: 100,
                    max: 1000
                },
                question: [
                    'x Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'x Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            m: {
                range: {
                    min: 1000,
                    max: 10000
                },
                question: [
                    'x Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    'x Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            }
        }
    }, division: {
        sign: "÷",
        dif: {
            b: {
                range: {
                    min: 10,
                    max: 100
                },
                question: [
                    '÷ Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '÷ Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            i: {
                range: {
                    min: 100,
                    max: 1000
                },
                question: [
                    '÷ Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '÷ Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            },
            m: {
                range: {
                    min: 1000,
                    max: 10000
                },
                question: [
                    '÷ Cost of a car is Rs ? and the cost of another car is Rs ?. What is the total cost of both cars?',
                    '÷ Cost of a ten apple is Rs ? and the cost of two bananas is Rs ? banana. What is the total of cost of both fruits ?'
                ]
            }
        }
    }
}

const getProblem = () => {
    const rand = Math.random() * 100
    let object
    if (rand <= 25) {
        object = problem.addition
    }
    else if (rand <= 50) {
        object = problem.subtraction
    }
    else if (rand <= 75) {
        object = problem.multiplication
    }
    else {
        object = problem.division
    }
    return object
}
const getRand = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
}
const parseQuestion = (question, firstNumber, secondNumber) => {
    let ques = question.replace('?', firstNumber);
    ques = ques.replace('?', secondNumber);
    console.log(ques)
    return ques
}
const getQuestion = (questions) => {
    const type = Math.random() * 100
    if (type < 50) {
        return questions[parseInt(Math.random() * questions.length)]
    }
    return null
}
const getProblemSet = (questions, sign, range) => {
    let firstNumber = getRand(range.min, range.max)
    let secondNumber = getRand(range.min, range.max)
    let question = getQuestion(questions)
    let answer;

    if (firstNumber < secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp
    }
    if (sign == '+') {
        answer = firstNumber + secondNumber
    }
    else if (sign == '-') {
        answer = firstNumber - secondNumber
    }
    else if (sign == 'X') {
        answer = firstNumber * secondNumber
    }
    else {
        const remainder = firstNumber % secondNumber
        if (remainder != 0) {
            firstNumber -= remainder
        }
        answer = firstNumber / secondNumber
    }
    if (question == null) {
        question = firstNumber + " " + sign + " " + secondNumber
    }
    else {
        question = parseQuestion(question, firstNumber, secondNumber)
    }
    return {
        question,
        answer,
        firstNumber,
        secondNumber
    }
}
const generate = () => {
    const problemObject = getProblem()
    const dif = getURLParams.dif
    let problemSet
    if (dif == 'b') {
        problemSet = getProblemSet(problemObject.dif.b.question, problemObject.sign, problemObject.dif.b.range)
    }
    else if (dif == 'i') {
        problemSet = getProblemSet(problemObject.dif.i.question, problemObject.sign, problemObject.dif.i.range)
    }
    else {
        problemSet = getProblemSet(problemObject.dif.m.question, problemObject.sign, problemObject.dif.m.range)
    }
    return problemSet
}

const getRandomOption = (dif) => {
    const max = dif == 'b' ? 30000 : dif == 'i' ? 70000 : 99999
    const min = dif == 'b' ? 10000 : dif == 'i' ? 30000 : 70000
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