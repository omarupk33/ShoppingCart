import { useState } from "react"
import { useOutletContext } from "react-router"

function Item({name, image, info, item}){
    const {inCart, setInCart, itemCount, setItemCount} = useOutletContext()
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
    inCart.map(e=>console.log(e))
        setInCart([...inCart, item])
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
        Buy
        </button>
        </div>
    )
}


export default Item