import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return parseInt(eq)
}
const types = [0, 1] // 0 : hour, 1 : minute

const generate = () => {
    const dif = getURLParams.dif
    const randomType = types[parseInt(Math.random() * types.length)]
    let unitBefore;
    let unitAfter;
    if (randomType == 0) { unitBefore = "H"; unitAfter = "M" }
    else if (randomType == 1) { unitBefore = "M"; unitAfter = "S" }
    let numberBefore;
    let numberAfter;
    if (unitBefore == "H") {
        numberBefore = getRandomNumber(1, 12)
        numberAfter = numberBefore * 60
    }
    else if (unitBefore == "M") {
        numberBefore = getRandomNumber(0, 59)
        numberAfter = numberBefore * 60
    }
    let options = getOptionsHavingAnswer(numberBefore, numberAfter, unitBefore, unitAfter)

    return {
        numberBefore,
        numberAfter,
        unitBefore,
        unitAfter,
        options
    }

}
const getNumberAround = (numberBefore, unitBefore) => {
    let number;
    if (unitBefore == "H") {
        number = getRandomNumber(1, 12)
    }
    else if (unitBefore == "M") {
        number = getRandomNumber(0, 59)
    }
    if (number == numberBefore) return getNumberAround(numberBefore, unitBefore)

    return number
}
const getOptionsHavingAnswer = (numberBefore, numberAfter, unitBefore, unitAfter) => {
    let numbersBefore = []
    let numbersAfter = []

    while (numbersBefore.length < 5) {
        let optionB = getNumberAround(numberBefore, unitBefore)
        if (numbersBefore.indexOf(optionB + unitBefore) === -1) {
            let optionA = optionB * getRandomNumber(30, 55)
            numbersBefore.push(optionB + unitBefore)
            numbersAfter.push(optionA + unitAfter)
        }
    }
    numbersBefore[parseInt(Math.random() * numbersBefore.length)] = numberBefore + unitBefore
    numbersAfter[parseInt(Math.random() * numbersAfter.length)] = numberAfter + unitAfter

    return {
        numbersBefore,
        numbersAfter
    }
}
export default {
    generate

}