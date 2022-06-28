
const getNumber = (min, max) => {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const length = (parseInt(Math.random() * (max - min) + min) + "").split("").length
    console.log(length)
    let number = [2]

    while (number.length <= length) {

        let val = nums[parseInt(Math.random() * nums.length)]
        if (number.findIndex(item => item == val) == -1)
            number.push(val);
    }
    return number
}
const generate = () => {
    const numberArray = getNumber(100000, 90000000)
    const randomIndex = parseInt(Math.random() * numberArray.length)
    const digit = numberArray[randomIndex]
    let i = 0
    let number = 0
    while (i < numberArray.length) {
        number = number * 10 + numberArray[i]
        i++;
    }
    return {
        index: randomIndex,
        digit,
        numberArray,
        number
    }
}

export default {
    generate
}