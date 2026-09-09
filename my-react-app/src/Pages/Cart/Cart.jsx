import { Link } from "react-router"
import { useOutletContext } from 'react-router'
import './cart.css'
import { useEffect, useState } from "react"

function Cart(){

    const {inCart, numberOfItems, setInCart} = useOutletContext()

    const deleteItem = (item)=>{
    setInCart(inCart.filter((i)=> i.name !== item.name))
    }
    
    return (
    <div data-testid="cart-container" className="cart">
        <div className="in-cart-items">
            {inCart.map(item=>{

                const image = <img alt="img" src={item.image}></img>
                const name = <h3> {item.name}</h3>
                const info = <h3>{item.info}</h3>
                const deleteButton  = <button onClick={()=>{deleteItem(item)}}>X</button>

            return <div>
                {image}
                {name}
                {info}
                {deleteButton}
                </div>
            })}
        </div>
        <div>
            {numberOfItems}
        </div>
    </div>
    )
}

export default Cart