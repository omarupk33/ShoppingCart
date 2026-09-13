import { useState } from "react"
import { useOutletContext } from "react-router"

function Item({name, image, info, item}){
    const { setInCart, itemCount, setItemCount} = useOutletContext()
    const [numItem, setNumItem] = useState(1)




    const itemUp = ()=>{
    setNumItem(numItem+1)
    setItemCount({...itemCount, [name]:numItem+1})
    }

    const itemDown = ()=>{
    if(numItem > 1) setNumItem(numItem-1) 
    setItemCount({...itemCount, [name]:numItem-1})
    
    }

    const updateCart = (item) => {
    
        setInCart((prev)=>{
            if(prev.some((cartItem) => cartItem.name === item.name)){
                return prev
            }
            else{
                return [...prev, item]
            }
        })
    }
    

    return (
        <div className="item" key={name}>
        <img alt="img" src={image}></img>
        <h3> {name}</h3>
        <h3>{info}</h3>
            <div className="item-num">
            <button onClick={itemDown}>{'<'}</button>
            <p>{numItem}</p>
            <button onClick={itemUp}>{'>'}</button>
            </div>
        <button onClick={()=>{updateCart(item)}}>
        Add To Cart
        </button>
        </div>
    )
}


export default Item