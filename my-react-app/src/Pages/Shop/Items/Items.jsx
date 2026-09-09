import { useOutletContext } from 'react-router'


function Items({shoppingList =[]}){    

  const {inCart, setInCart} = useOutletContext()
  const updateCart = (i) => {
        setInCart([...inCart, i])}
    
    return (
        <div role="region" className="items-container">
            {shoppingList.map((item)=>{
                const image = <img alt="img" src={item.image}></img>
                const name = <h3> {item.name}</h3>
                const info = <h3>{item.info}</h3>
                
                return (
                    <div className="item" key={item.name}>
                        {image}
                        {name}
                        {info}
                    <button onClick={()=>{updateCart(item)}}>
                            Buy
                    </button>

                    </div>
                )

            })}
        </div>
    )
}

export default Items