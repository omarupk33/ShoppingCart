function Items({itemList =[]}){
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

                        <button onClick={(e)=>{
                            e.preventDefault()
                        }}>
                            Buy
                        </button>
                        
                    </div>
                )

            })}
        </div>
    )
}

export default Items