import React from 'react';
import getURLParams from '../../../utils/getURLParams';

import Trapezium from './images/Trapezium.png'
import Square from './images/square.png'
import Rhombus from './images/rhombus.png'
import Rectangle from './images/rectangle.png'
import Parallelogram from './images/Parallelogram.png'
import Kite from './images/Kite.png'

const dif = getURLParams.dif;

const getData = () => {
    let data = [
        {
            name: 'Trapezium',
            img: Trapezium,
            def: 'Only one pair of opposite sides are parallel'
        },
        {
            name: 'Parallelogram',
            img: Parallelogram,
            def: 'The opposite sides are parallel and equal & the opposite angles are equal'
        },
        {
            name: 'Rectangle',
            img: Rectangle,
            def: 'The opposite sides are parallel and equal & each interior angle is a right angle'
        },
        {
            name: 'Rhombus',
            img: Rhombus,
            def: 'All sides of the rhombus are congruent, & the opposite sides are parallel'
        },
        {
            name: 'Square',
            img: Square,
            def: 'All four sides of the square are equal, and the opposite sides of the square are parallel to each other'
        },
        {
            name: 'Kite',
            img: Kite,
            def: 'Two pairs of adjacent sides are congruent & One pair of opposite angles are equal '
        }
    ];

    return data;
}

const getDisplay = (d) => {
    let allData = d;
    let random = parseInt(Math.random() * allData.length);

    let ans = allData[random]
    // console.log(ans);

    return { n: ans.name, i: ans.img, d: ans.def }
}

function generate() {
    let problem = {
        question: '',
        data: [],
        display: {},
        options: []
    }
    
    problem = { ...problem, data: getData() };
    problem = { ...problem, display: getDisplay(problem.data) };

    if(dif=='b'){
        problem = { ...problem, question: 'Which type of Quadrilateral is the below figure ?' }
    }
    else if(dif=='i'){
        problem = { ...problem, question: 'According to definition which quadelateral is this ?' }
    }
    else if(dif=='a'){
        problem = { ...problem, question: 'According to definition which quadelateral is this ?' }
    }


    return problem;
}


export default { generate }
