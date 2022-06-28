import getURLParams from "../../../utils/getURLParams"
const compositeList = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25
    , 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50
    , 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75
    , 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100]

const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const ifNumberExists = (number, list = []) => {
    return list.findIndex(num => num == number) < 0 ? true : false
}

const getUniqueComopositeNumbers = (range) => {
    const list = []
    while (list.length < 5) {
        const number = compositeList[parseInt(Math.random() * compositeList.length)]
        if (list.indexOf(number) === -1 && number < range)
            list.push(number)
    }
    console.log(list)
    return list
}
const getUniquePrimeNumbers = (range) => {
    const list = []
    while (list.length < 5) {
        const number = primeList[parseInt(Math.random() * primeList.length)]
        if (list.indexOf(number) === -1 && number < range)
            list.push(number)
    }
    return list
}
const mergeListsRandomly = (listA, listB) => {
    const list = listA.concat(listB)
    list.sort(() => Math.random() - 0.5)
    return list
}
const generate = () => {
    const dif = getURLParams.dif

    let primeList;
    let compositeList;
    let range;
    let question = "Seperate Prime Numbers from Composite Numbers";
    dif == 'b' ? range = 30 : dif == 'i' ? range = 70 : range = 100

    primeList = getUniquePrimeNumbers(range)
    compositeList = getUniqueComopositeNumbers(range)

    const pclist = mergeListsRandomly(primeList, compositeList)
    const answer = { primeList, compositeList }
    const problem = {
        question,
        pclist,
        answer
    }
    return problem
}

export default {
    generate,
}