

const getNumber = (min, max) => {
    const number = parseInt(Math.random() * (max - min) + min)
    return number
}
const generate = () => {
    const a1 = getNumber(10000, 1000000000)
    const d = getNumber(1000, 100000)
    const sequence = [a1]
    let n = 2
    while (sequence.length < 3) {
        const an = a1 + (n - 1) * d
        sequence.push(an)
        n++;
    }
    const next = a1 + (n - 1) * d
    const question = "Find the number next In Sequence"
    const options = getOptions(next)
    console.log(next)
    return {
        question,
        sequence,
        answer: next,
        options
    }
}
const getOptions = (answer) => {
    let options = []
    while (options.length < 6) {
        const option = answer + (parseInt(Math.random() * answer * 0.25)) * (Math.random() > 0.5 ? -1 : 1)
        if (options.findIndex(item => item == option) == -1 && option != answer)
            options.push(option)
    }
    options[parseInt(Math.random() * options.length)] = answer
    return options
}
export default {
    generate
}