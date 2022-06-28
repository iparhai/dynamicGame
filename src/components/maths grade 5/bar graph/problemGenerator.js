import React from 'react';
import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;
const lang = getURLParams.lang;


const populate = (start, end , entity) => {

    let data = [];
    // data[entity] = [];

    let colors = [["#ffd847", "#e0a106"],["#ff47ab", "#e0064e"],["#add9c0", "#1da890"],["#cbd9ad", "#7ca81d"],["#d9c1ad", "#714511"]];
    
    const fillEntities = (s) => {
        let foods = ['Somasa' , 'Apple' , 'Sandwich' , 'Orange' , 'Chips'];
        let animals = ['Zebra' , 'Giraffe' , 'Lion' , 'Ostrich' , 'Elephant'];
        let childrens = ['John' , 'Smith' , 'Alex' , 'Methew', 'Kellan'];
        if(entity == 'food')
            return foods[s] 
        else if(entity == 'animal')
            return animals[s]
        else
            return childrens[s]
        
    }

    for(var i=start ; i<=end ; i++){
        data.push({
            number : i * (Math.floor(Math.random()*10)+5) ,
            values : fillEntities(i-1), 
            colors : colors[i-1],
        })
    }
    console.log(data)
    return data
} 

function generate(){
    let problem = {
        question : '',
        subQuestion : '',
        data : [],
        entityToFind : ''
    }
    if(dif == 'b'){
        problem = {...problem, data : populate(1,5,'food')}  
        problem = {...problem, question : 'Read the graph and answer the following questions:'}
        problem = {...problem, entityToFind : ''}
    }
    else if(dif == 'i'){
        problem = {...problem, data : populate(1,5,'animal')}  
        problem = {...problem, question : 'Read the graph and answer the following questions:'}
        problem = {...problem, subQuestion : ''}
    }
    else if(dif == 'a'){
        problem = {...problem, data : populate(1,5,'children')}  
        problem = {...problem, question : 'Read the graph and answer the following questions:'}
        problem = {...problem, subQuestion : ''}
    }
    
    return problem;
}

export default {generate};