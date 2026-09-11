import { useState } from 'react'
import { useOutletContext } from 'react-router'
import Item from './item'


function Items({shoppingList =[]}){    
    
    return (
        <div role="region" className="items-container">
            {shoppingList.map((item, index)=>{
                return(
                <Item key={index} name={item.name} info={item.info} image={item.image} 
                number={item.number} item={item}></Item>
                )

            })}
        </div>
    )
}

export default Items