import getURLParams from '../../../utils/getURLParams';
import { getDefaultNormalizer } from '@testing-library/react';
import {fraction} from 'mathjs'

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const getData = (start , length) => {
    let array = Array(length).fill().map(()=>{return {entity : '' , color : null , number : start++} });
    let divider = Math.floor(Math.random()*length);

    let arrayWithColor = [];

    array.forEach((el,id,arr)=>{
        if(id<=divider){
            arrayWithColor.push({...el,color:'red',entity:'Basit'})
        }else{
            arrayWithColor.push({...el,color:'white',entity:'Mashkoor'})
        }
    })

    // console.log(arrayWithColor);

    return arrayWithColor
}

const getAnswer = (data , random) =>{
    let allData = data;
    let no_1 = 0;
    let no_2 = 0;

    allData.forEach((el,id)=>{
        if(el.color == 'red'){
            no_1 = no_1+1
        }else{
            no_2 = no_2+1
        }
    })

    // console.log('red' + no_1)
    // console.log('white' + no_2)
    
    let ans = {n1 : no_1 , n2 : no_2 , status : true};

    let options = Array(4).fill().map((o,i)=>{
        if(i==0){
            return ans
        }else{
            return {n1 : Math.floor(Math.random()*random) , n2 : Math.floor(Math.random()*random) , status : false} 
        }
    })
    

    // console.log(options.sort(() => Math.random() - 0.5))
    return options.sort(() => Math.random() - 0.5);
}

function generate(){
    let problem = {
        question : '',
        answer : null,
        data : []
    }

    
    if(dif == 'b'){
        problem = {...problem , data : getData(20,10)}
        problem = {...problem , answer : getAnswer(problem.data , 10)}
        problem = {...problem , question : 'Express the following boxes as ratio'}
    }
    else if(dif == 'i'){
        problem = {...problem , data : getData(10,20)}
        problem = {...problem , answer : getAnswer(problem.data , 20)}
        problem = {...problem , question : 'Ratio of red to white boxes is given show express it'}
    }
    else if(dif == 'a'){
        problem = {...problem , data : getData(41,20)}
        problem = {...problem , answer : getAnswer(problem.data , 20)}
        problem = {...problem , question : 'The ratio of pocket money of Bismah and Omaima is?'}
    }

    return problem
}

export default {generate}