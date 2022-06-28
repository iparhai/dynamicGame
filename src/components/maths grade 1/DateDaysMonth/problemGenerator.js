

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
const year = [];
const date = []
const generatYear = () => {
    for (var i = 1986; i <= 2050; i++) {
        year.push(i);
    }
    // console.log(year);

}
const getDates = (month,year) => {
    const monthIndex = months.indexOf(month) + 1
    const date = []
    var range;
    if (monthIndex % 2 != 0) {
        range = 31;
    } else {
        if (monthIndex == 2) {
            range = 28;
            if (year % 4 == 0) {
                range += 1;
            }
        }
        else {
            range = 30;
        }
    }
    for (var i = 1; i <= range; i++) {
        date.push(i);
    }
    return date
}

const generateProblem = () => {
    const randomMonthIndex = Math.floor(Math.random() * months.length);
    const month = months[randomMonthIndex];
    const date = getDates(month)
    const day = Math.floor(Math.random() * date.length);
    const year = Math.floor(Math.random() * (2030 - 2010) + 2010)
    const question = "Select " + day + " / " + month + " / " + year + "."
    return { day, month, year, question }
}
export default {
    generateProblem,
    getDates
}