import { isNaN, number, typeOf } from "mathjs";
import { func } from "prop-types";

var TreeNode = function (left, right, operator) {
    this.left = left;
    this.right = right;
    this.operator = operator;

    this.toString = function () {
        return '(' + left + ' ' + operator + ' ' + right + ')';
    }
}

function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomFloorCeil(num) {
    if (Math.random() > 0.5) {
        return Math.floor(num)
    }
    return Math.ceil(num)
}
function buildTree(numNodes, operator) {
    if (numNodes === 1)
        return randomNumberRange(1, 100);
    var numLeft = randomFloorCeil(numNodes / 2,);
    var leftSubTree = buildTree(numLeft, operator);
    var numRight = randomFloorCeil(numNodes / 2);
    var rightSubTree = buildTree(numRight, operator);

    var m = randomNumberRange(0, operator.length);
    var op = operator[m];
    return new TreeNode(leftSubTree, rightSubTree, op);
}
function printTree(node) {
    if (!node) return
    printTree(node.left)
    console.log(node)
    printTree(node.right)
}

var math_it_up = {
    '+': function (x, y) { return x + y },
    '*': function (x, y) { return x * y }
};
function checkSimilar(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            return false
    }
    return true
}

function getSimilarEquation(equation) {
    const formatted = equation.replace(/(\d[\d\.]*)/g, "?")
    var numbers = equation.match(/(\d[\d\.]*)/g)
    return formatted.split("").map(item => {
        if (item == "?") {
            const randomIndex = parseInt(Math.random() * numbers.length)
            const randomNumber = numbers[randomIndex]
            numbers.splice(randomIndex, 1);
            return randomNumber
        }
        return item
    }).join('')
}
function getNonSimilarEquation(equation) {
    const formatted = equation.replace(/(\d[\d\.]*)/g, "?")
    var numbers = equation.match(/(\d[\d\.]*)/g)
    return formatted.split("").map(item => {
        if (item == "?") {
            const randomIndex = parseInt(Math.random() * numbers.length)
            const randomNumber = randomNumberRange(1, 100)
            numbers.splice(randomIndex, 1);
            return randomNumber
        }
        return item
    }).join('')
}
function getAssociativeOptions(ans) {
    var options = [];
    while (options.length != 4) {
        options.push(getNonSimilarEquation(ans))
    }
    return options
}



export {
    buildTree,
    getSimilarEquation,
    printTree,
    getAssociativeOptions
}