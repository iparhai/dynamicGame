const solve = (attemptedAnswer, answer) => {
    var str = ""
    attemptedAnswer.map(itm => {
        str += itm.val + " "
    })
    console.log(str, answer)
    if (str.trim() == answer) {
        return true
    }
    return false
}
export default {
    solve
}