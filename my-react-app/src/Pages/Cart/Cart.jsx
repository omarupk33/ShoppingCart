import { Link } from "react-router"
import { useOutletContext } from 'react-router'
import './cart.css'
import { useEffect, useState } from "react"

function Cart(){

    const {inCart, numberOfItems, setInCart} = useOutletContext()

    
    // Should employ remove the item function

    return (
    <div data-testid="cart-container" className="cart">
        <div className="in-cart-items">
            {inCart}
        </div>
        <div>
            {numberOfItems}
        </div>
    </div>
    )
}

export default Cart