
import { useOutletContext } from 'react-router'
import './cart.css'


function Cart(){

    const {inCart, setInCart, itemCount} = useOutletContext()


    const deleteItem = (item)=>{
        setInCart(inCart.filter((i)=> i.name !== item.name))
    }
    
    return (
    <div data-testid="cart-container" className="cart">
        <div className="in-cart-items">
            {inCart.map(item=>{
                const image = <img alt="img" src={item.image}></img>
                const name = <h3>{item.name}</h3>
                const info = <h3>{item.info}</h3>
                const deleteButton  = <button onClick={()=>{deleteItem(item)}}>X</button>
                const count =  <h3>{itemCount[item.name]}</h3>
            return <div>
                {image}
                {name}
                {info}
                {deleteButton}
                {count}
                </div>
            })}
        </div>
    </div>
    )
}

export default Cart