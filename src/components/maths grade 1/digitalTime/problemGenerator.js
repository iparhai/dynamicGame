import getURLParams from "../../../utils/getURLParams"

let minutes = [0, 15, 30, 45]
let zones = [0, 1] // 0 means am 1 means pm
const generateTimeProblem = () => {
    const dif = getURLParams.dif
    const hour = parseInt((Math.random() * (12 - 1)) + 1)
    const minute = minutes[parseInt(Math.random() * (minutes.length))]
    var zone = null
    var question = minute == 0 ? "Set the clock to " + hour + " O' Clock" : minute == 30 ? "Set the clock to half past " + hour : "Set the clock to " + minute + " past " + hour

    if (dif == 'b') {

    }
    else if (dif == 'i') {

    }
    else {
        zone = zones[parseInt(Math.random() * zones.length)]
        question += zone == 0 ? " before noon" : " after noon"

    }


    return { question, hour, minute, zone }
}
export default {
    generateTimeProblem
}
