import React from 'react';
import getURLParams from '../../../utils/getURLParams';

import Acute from './images/TriangleAcute.png'
import Equilateral from './images/TriangleEquilateral.png'
import Isosceles from './images/TriangleIsosceles.png'
import Obtuse from './images/TriangleObtuse.png'
import Right from './images/TriangleRight.png'
import Scalene from './images/TriangleScalene.png'

const dif = getURLParams.dif;

const getData = () => {
    let data = [
        {
            name: 'Acute Triangle',
            img: Acute,
            def: 'has three angles < 90deg'
        },
        {
            name: 'Equilateral Triangle',
            img: Equilateral,
            def: 'has three equal sides'
        },
        {
            name: 'Isoceles Triangle',
            img: Isosceles,
            def: 'has two equal sides'
        },
        {
            name: 'Obtuse Triangle',
            img: Obtuse,
            def: 'has one angle > 90deg'
        },
        {
            name: 'Right Triangle',
            img: Right,
            def: 'has one angle equal to 90deg'
        },
        {
            name: 'Scalene Triangle',
            img: Scalene,
            def: 'has no equal sides'
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
        problem = { ...problem, question: 'Which type of Triangle is the below figure ?' }
    }
    else if(dif=='i'){
        problem = { ...problem, question: 'According to definition which Triangle is this ?' }
    }
    else if(dif=='a'){
        problem = { ...problem, question: 'According to definition which Triangle is this ?' }
    }


    return problem;
}


export default { generate }
