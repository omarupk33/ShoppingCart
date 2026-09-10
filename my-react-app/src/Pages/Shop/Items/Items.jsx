import { useState } from 'react'
import { useOutletContext } from 'react-router'
import Item from './item'


function Items({shoppingList =[]}){    
    //err here We may need to uplift it or use useEffect
    
    return (
        <div role="region" className="items-container">
            {shoppingList.map((item)=>{
                return(
                <Item name={item.name} info={item.info} image={item.image} item={item}></Item>
                )

            })}
        </div>
    )
}

export default Items