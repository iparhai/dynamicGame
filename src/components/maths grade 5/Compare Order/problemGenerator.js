import getURLParams from '../../../utils/getURLParams';
import { getDefaultNormalizer } from '@testing-library/react';

const dif = getURLParams.dif;
const lang = getURLParams.lang;


const getData = (start , length) => {
    let array = Array(length).fill().map((obj)=> start++);
    let whereTo = parseInt(Math.random()*array.length);
    let newArray = [];
    array.forEach((obj,idx)=>{
        if(idx==whereTo){
            newArray.push({number: obj , display : 'hidden'})
        }else{
            newArray.push({number: obj , display : 'visible'})
        }
    })


    return {data : newArray , index : whereTo};
}

const getOptions = (data , max) => {
    let option = [
        {
            number : Math.floor(Math.random()*max),
            display : 'visible'
        },
        {
            number : Math.floor(Math.random()*max),
            display : 'visible'
        },
        {
            number : Math.floor(Math.random()*max),
            display : 'visible'
        },
    ];

    data.forEach((el)=>{
        if(el.display == 'hidden'){
            option.push({
                number : el.number,
                display : 'visible'
            })
        }
        return
    })
    return option;
}


function generate(){
    let problem = {
        question : '',
        data : [],
        options : [],
    }

    problem = {...problem , question : 'Finish my body to make a sequence'}
    
    if(dif == 'b'){
        problem = {...problem , data : getData(10,6)}
        problem = {...problem , options : getOptions(problem.data.data , 100)}
    }
    else if(dif == 'i'){
        problem = {...problem , data : getData(22,6)}
        problem = {...problem , options : getOptions(problem.data.data , 100)}
    }
    else if(dif == 'a'){
        problem = {...problem , data : getData(43,8)}
        problem = {...problem , options : getOptions(problem.data.data , 100)}
    }


    return problem
}


export default {generate}