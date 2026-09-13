
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
                const name = <title>{item.name}</title>
                const info = <p>{item.info}</p>
                const count =<p>{itemCount[item.name]}</p>
                const deleteButton  = <button className='deleteBtn' onClick={()=>{deleteItem(item)}}>X</button>
            return <div>
                {image}
                {name}
                {info}
                {count}
                {deleteButton}
                </div>
            })}
        </div>
    </div>
    )
}

export default Cart