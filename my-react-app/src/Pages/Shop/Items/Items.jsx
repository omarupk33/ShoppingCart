import { useOutletContext } from 'react-router';


function Items({itemList =[]}){
    

  const {inCart, setInCart} = useOutletContext()

  const updateCart = (i) => {
    setInCart([...inCart, i])
    console.log(i)
  }
    
    return (
        <div role="region" className="items-container">
            {itemList.map((item)=>{
                const image = <img alt="img" src={item.image}></img>
                const name = <h3> {item.name}</h3>
                const info = <h3>{item.info}</h3>

                return (
                    <div className="item" key={item.name}>
                        {image}
                        {name}
                        {info}

                        <button onClick={()=>{updateCart(name)}}>
                            Buy
                        </button>
                        
                    </div>
                )

            })}
        </div>
    )
}

export default Items