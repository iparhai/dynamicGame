import getURLParams from '../../../utils/getURLParams'
const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return parseInt(eq)
}
const types = [0, 1] // 0 : km to m, 1 : m to cm, 2 : cm to mm

const generate = () => {
    const dif = getURLParams.dif
    const randomType = types[parseInt(Math.random() * types.length)]
    let unitBefore;
    let unitAfter;
    if (randomType == 0) { unitBefore = "kg"; unitAfter = "g" }
    else if (randomType == 1) { unitBefore = "g"; unitAfter = "mg" }


    let numberBefore = dif == "b" ? getRandomNumber(1, 9) : dif == "i" ? getRandomNumber(5, 15) : getRandomNumber(8, 20)
    let numberAfter = unitBefore == 'kg' ? numberBefore * 1000 : numberBefore * 1000
    let options = getOptionsHavingAnswer(numberBefore, numberAfter, unitBefore, unitAfter)

    return {
        numberBefore,
        numberAfter,
        unitBefore,
        unitAfter,
        options
    }

}
const getNumberAround = (numberBefore) => {
    const dif = getURLParams.dif
    let number;
    if (dif == 'b') {
        number = getRandomNumber(1, 9)
    }
    else if (dif == 'i') {
        number = getRandomNumber(5, 15)
    }
    else {
        number = getRandomNumber(8, 20)
    }
    if (number == numberBefore) return getNumberAround(numberBefore)
    return number
}
const getOptionsHavingAnswer = (numberBefore, numberAfter, unitBefore, unitAfter) => {
    let numbersBefore = []
    let numbersAfter = []

    while (numbersBefore.length < 5) {
        let optionB = getNumberAround(numberBefore)
        if (numbersBefore.indexOf(optionB + unitBefore) === -1) {
            let optionA = parseInt(optionB * (unitBefore == 'kg' ? (1000 - Math.random() * 500) : (1000 - Math.random() * 500)))
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