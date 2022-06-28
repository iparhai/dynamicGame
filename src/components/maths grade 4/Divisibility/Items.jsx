import React from 'react'

export default function Items({Key,number,AddinBasket}) {
    
    return (
        <div className='ItemDivisibility' onClick={()=>AddinBasket()}>
            <h6>{number}</h6>
        </div>
    )
}
