// import sessionData from "../../../utils/sessionData";

import getURLParams from "../../../utils/getURLParams";


const getNumber = (min, max) => {
    const number = parseInt(Math.random() * (max - min) + min)
    return number
}

const generateSequence = (length) => {
    let i = 0;
    let sequence = []
    const dif = getURLParams.dif
    while (sequence.length < length) {
        const number = dif == 'b' ? getNumber(10000, 100000) : dif == 'i' ? getNumber(100000, 1000000) : getNumber(1000000, 1000000000)
        if (sequence.findIndex(item => item == number) == -1) {
            sequence.push({ id: i, text: number })
            i++;
        }

    }
    return sequence
}
export default {
    generateSequence
}