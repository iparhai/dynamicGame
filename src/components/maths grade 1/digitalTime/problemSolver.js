
const solve = (answer, problem ) => {
    console.log(answer,problem)
    if(parseInt(answer.hour) == problem.hour && parseInt(answer.minute) == problem.minute && answer.zone == problem.zone){
        return true
    }
    return false
}
export default {
    solve
}