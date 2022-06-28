import getURLParams from "../../../utils/getURLParams"

const UNIT = {
    length: ['km', 'm', 'cm', 'mm'],
    mass: ['kg', 'g'],
    volume: ['l', 'ml']

}
const OPERATOR = {
    ADD: "+",
    SUBTRACT: "-"
}
const dif = getURLParams.dif
const getNumber = (min, max) => {
    return parseInt((Math.random() * (max - min) + min).toFixed())
}

const getBeforeAfterUnits = (units) => {
    const beforeUnitIndex = parseInt(Math.random() * (units.length - 1))
    const beforeUnit = units[beforeUnitIndex]
    const afterUnit = units[beforeUnitIndex + 1]
    return { beforeUnit, afterUnit }
}
const getBeforeAfterUnitsNumbers = (dif, scale) => {
    const beforeUnitNumber = dif == 'b' ? getNumber(1, 9) : dif == 'i' ? getNumber(7, 15) : getNumber(12, 20)
    let afterUnitNumber;
    if (scale <= 10) {
        afterUnitNumber = getNumber(1, 9)
    }
    else if (scale <= 100) {
        afterUnitNumber = getNumber(10, 99)
    }
    else {
        afterUnitNumber = getNumber(100, 999)
    }
    return {
        beforeUnitNumber, afterUnitNumber
    }
}
const generateLengthProblem = (lenghtUnit) => {
    const { beforeUnit, afterUnit } = getBeforeAfterUnits(lenghtUnit)
    const scale = beforeUnit == 'km' ? 1000 : beforeUnit == 'm' ? 100 : 10
    return { beforeUnit, afterUnit, scale }
}
const generateMassProblem = (massUnit) => {
    const { beforeUnit, afterUnit } = getBeforeAfterUnits(massUnit)
    const scale = beforeUnit == 'kg' ? 1000 : 1000
    return { beforeUnit, afterUnit, scale }
}
const generateVolumeProblem = (volumeUnit) => {
    const { beforeUnit, afterUnit } = getBeforeAfterUnits(volumeUnit)
    const scale = beforeUnit == 'l' ? 1000 : 1000
    return { beforeUnit, afterUnit, scale }
}

const generate = () => {
    const randomUnit = getNumber(0, 2)
    let measurementObj;
    const pairOfNumbers = []
    if (randomUnit == 0) {
        measurementObj = generateLengthProblem(UNIT.length)
    }
    else if (randomUnit == 1) {
        measurementObj = generateMassProblem(UNIT.mass)
    }
    else {
        measurementObj = generateVolumeProblem(UNIT.volume)
    }
    pairOfNumbers.push(getBeforeAfterUnitsNumbers(dif, measurementObj.scale))
    pairOfNumbers.push(getBeforeAfterUnitsNumbers(dif, measurementObj.scale))

    if (pairOfNumbers[0].beforeUnitNumber < pairOfNumbers[1].beforeUnitNumber) {
        const first = pairOfNumbers.shift()
        pairOfNumbers.push(first)
    }
    let op;

    if (Math.random() >= 0)
        op = OPERATOR.ADD
    else
        op = OPERATOR.SUBTRACT
    const { beforeUnit, afterUnit, scale } = measurementObj
    const question = (op == OPERATOR.ADD ? "Add " : "Subtract ") + pairOfNumbers[0].beforeUnitNumber + beforeUnit + " " + pairOfNumbers[0].afterUnitNumber + afterUnit
        + " and " + pairOfNumbers[1].beforeUnitNumber + beforeUnit + " " + pairOfNumbers[1].afterUnitNumber + afterUnit
    const answer = solve(pairOfNumbers, op, measurementObj)
    const options = getOptions(
        pairOfNumbers[0].beforeUnitNumber, pairOfNumbers[0].afterUnitNumber,
        pairOfNumbers[1].beforeUnitNumber, pairOfNumbers[1].afterUnitNumber,
        beforeUnit, afterUnit, answer
    )
    console.log(answer, options)
    return { question, answer, options, pairOfNumbers, measurementObj }
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
    return options
}
const solve = (pairOfNumbers, operator, measurementObj) => {
    let answer;
    console.log(pairOfNumbers, operator, measurementObj)
    if (operator == OPERATOR.ADD) {
        let sum;
        let smallerUnitSum;
        let biggerUnitSum;
        let carry = 0;
        sum = pairOfNumbers[0].afterUnitNumber + pairOfNumbers[1].afterUnitNumber
        if (sum >= measurementObj.scale) {
            smallerUnitSum = sum - measurementObj.scale
            carry = 1
        }
        else {
            smallerUnitSum = sum
        }
        biggerUnitSum = pairOfNumbers[0].beforeUnitNumber + pairOfNumbers[1].beforeUnitNumber + carry
        answer = biggerUnitSum + measurementObj.beforeUnit + " " + smallerUnitSum + measurementObj.afterUnit
    }
    else {
        let smallerUnitSub;
        let biggerUnitSub;

        let upper = parseInt(pairOfNumbers[0].beforeUnitNumber + "" + pairOfNumbers[0].afterUnitNumber)
        let lower = parseInt(pairOfNumbers[1].beforeUnitNumber + "" + pairOfNumbers[1].afterUnitNumber)
        let sub = upper - lower;
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