import { Link } from "react-router"
import { useOutletContext } from 'react-router'
import './cart.css'

function Cart(){

    const {inCart} = useOutletContext()


    return (
    <div data-testid="cart-container" className="cart">
        <div className="in-cart-items">
            {inCart}
        </div>
    </div>
    )
}

export default Cart