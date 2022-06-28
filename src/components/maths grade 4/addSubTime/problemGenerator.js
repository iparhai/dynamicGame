import getURLParams from "../../../utils/getURLParams"

const UNIT = {
    Time: ['h', 'm', 's']

}
const OPERATOR = {
    ADD: "+",
    SUBTRACT: "-"
}
const dif = getURLParams.dif

const getRandomNumber = (min, range) => {
    let eq;
    eq = ((Math.random() * (range - min)) + min).toFixed()
    return parseInt(eq)
}
const getTimeUnits = (units) => {
    const index = parseInt(Math.random() * (units.length - 1))
    const unitBigger = units[index]
    const unitSmaller = units[index + 1]
    return {
        unitBigger, unitSmaller
    }
}

const generateTimeUnits = (unit) => {
    const { unitBigger, unitSmaller } = getTimeUnits(unit)
    const scale = 59
    return { beforeUnit: unitBigger, afterUnit: unitSmaller, scale }
}

const getTime = (dif, timeObj) => {
    let numberBefore;
    let numberAfter;
    if (timeObj.beforeUnit == "h") {
        numberBefore = getRandomNumber(1, 12)
    }
    else if (timeObj.beforeUnit == "m") {
        numberBefore = getRandomNumber(0, 59)
    }
    numberAfter = getRandomNumber(0, 59)
    return { numberBefore, numberAfter }
}
const generate = () => {

    let timeObj;
    const pairOfNumbers = []
    timeObj = generateTimeUnits(UNIT.Time)
    let times = []
    while (times.length < 2) {
        times.push(getTime(dif, timeObj))
    }
    times.sort((a, b) => b.numberBefore - a.numberBefore)
    let op;
    if (Math.random() >= 0)
        op = OPERATOR.ADD
    else
        op = OPERATOR.SUBTRACT
    const { beforeUnit, afterUnit, scale } = timeObj
    const question = (op == OPERATOR.ADD ? "Add " : "Subtract ") + times[0].numberBefore + beforeUnit + " " + times[0].numberAfter + afterUnit
        + " and " + times[1].numberBefore + beforeUnit + " " + times[1].numberAfter + afterUnit
    const answer = solve(times, op, timeObj)
    const options = getOptions(
        times[0].numberBefore, times[0].numberAfter,
        times[1].numberBefore, times[1].numberAfter,
        beforeUnit, afterUnit, answer
    )
    console.log(answer, options)
    return { question, answer, options, times, timeObj }
}
const getOptions = (upperBefore, upperAfter, lowerBefore, lowerAfter, unitBefore, unitAfter, answer) => {
    let options = []
    while (options.length < 5) {
        const newUpperBefore = upperBefore + parseInt(Math.random() * 0.5 * upperBefore)
        const newUpperAfter = upperAfter + parseInt(Math.random() * 0.5 * upperAfter) * (Math.random() > 0.5 ? -1 : +1)
        const newLowerBefore = lowerBefore + parseInt(Math.random() * 0.5 * lowerBefore)
        const newLowerAfter = lowerAfter + parseInt(Math.random() * 0.5 * lowerAfter) * (Math.random() > 0.5 ? -1 : +1)
        const option = (newUpperBefore + newLowerBefore) + unitBefore + " " + (newUpperAfter + newLowerAfter) + unitAfter
        if (options.findIndex(item => item === option) == -1 && option != answer) {
            options.push(option)
        }
    }
    options[parseInt(Math.random() * options.length)] = answer
    console.log(options);
    return options
}
const solve = (times, operator, timeObj) => {
    let answer;
    console.log(times, operator, timeObj)
    if (operator == OPERATOR.ADD) {
        let sum;
        let smallerUnitSum;
        let biggerUnitSum;
        let carry = 0;
        sum = times[0].numberAfter + times[1].numberAfter
        if (sum >= timeObj.scale) {
            smallerUnitSum = sum - timeObj.scale
            carry = 1
        }
        else {
            smallerUnitSum = sum
        }
        console.log(sum);
        biggerUnitSum = times[0].numberBefore + times[1].numberBefore + carry
        answer = biggerUnitSum + timeObj.beforeUnit + " " + smallerUnitSum + timeObj.afterUnit
    }
    else {
        // let smallerUnitSub;
        // let biggerUnitSub;

        // let upper = parseInt(pairOfNumbers[0].beforeUnitNumber + "" + pairOfNumbers[0].afterUnitNumber)
        // let lower = parseInt(pairOfNumbers[1].beforeUnitNumber + "" + pairOfNumbers[1].afterUnitNumber)
        // let sub = upper - lower;
    }
    return answer
}
// const array = [
//     {
//         objectName: ["pen", "ruler", ""],
//         objectUnit: "km"
//     }, {
//         objectName: ["", "", ""],
//         objectUnit: "m"
//     }
// ]

// const randomUnit = array[parseInt(Math.random() * array.length)]
// const randomWord = array[randomUnit].objectName[parseInt(Math.random() * array.length)]
// const question = "How do you measure " + randomWord + "?"
// const answerUnit = array[randomUnit].objectUnit


export default {
    generate
}