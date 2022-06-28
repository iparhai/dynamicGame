import React from 'react';
import ReactDOM from 'react-dom';

function Items({Key,image,count}){
    return(
        <img src={image} width='8%' onClick={count}/>
    );
}

export default Items;