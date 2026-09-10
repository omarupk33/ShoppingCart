import { useState } from "react"
import { useOutletContext } from "react-router"

function Item({name, image, info, item}){
    const {inCart, setInCart} = useOutletContext()
    const [numItem, setNumItem] = useState(1)


    const updateCart = (item) => {
    // setInCart(inCart.map((i)=> i.name === item.name ? i: item))
    setInCart([...inCart, item])
    }

    const itemUp = ()=>{
    setNumItem(numItem+1)
    console.log(numItem)
    }

    const itemDown = ()=>{
    if(numItem > 1) setNumItem(numItem-1)
    console.log(numItem)
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