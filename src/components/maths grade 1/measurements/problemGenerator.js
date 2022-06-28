import getURLParams from "../../../utils/getURLParams"

const types = [{
    name: "Mountain",
    key: ["High", "Higher", "Highest"]
}, {
    name: "Building",
    key: ["Tall", "Taller", "Tallest", "Short", "Shorter", "Shortest"]
}, {
    name: "Animal",
    key: ["Heavy", "Heavier", "Heaviest", "Long", "Longer", "Longest", "Light", "Lighter", "Lightest"]
}]
const generate = () => {
    const dif = getURLParams.dif
    var type;
    if (dif == 'b') {
        type = types[0]
    }
    else if (dif == 'i') {
        type = types[1]
    }
    else {
        type = types[2]
    }
    const quesKey = type.key[parseInt(Math.random() * type.key.length)]
    let question = "Find the " + quesKey.toLocaleUpperCase() + " out of ";
    if (quesKey.charAt(0) == 'H' && quesKey.charAt(1) == 'i') {
        question += "high, higher and highest"
    }
    else if (quesKey.charAt(0) == 'H' && quesKey.charAt(1) == 'e') {
        question += "heavy, heavier and heaviest"
    }
    else if (quesKey.charAt(0) == 'T') {
        question += "Tall, Taller and Tallest"
    }
    else if (quesKey.charAt(0) == 'S') {
        question += "Short, Shorter and Shortest"
    }
    else if (quesKey.charAt(0) == 'L' && quesKey.charAt(1) == 'o') {
        question += "long, longer and longest"
    }
    else if (quesKey.charAt(0) == 'L' && quesKey.charAt(1) == 'i') {
        question += "light, lighter and lightest"
    }
    question += " " + type.name.toLocaleUpperCase() + " of all."
    return { question, quesKey }
}
export default {
    generate
}