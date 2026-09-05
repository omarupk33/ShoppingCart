function Items({itemList =[]}){
    return (
        <div role="region" className="items-container">
            {itemList.map((item)=>{
                const img = <h3> {item.name} image</h3>
                const name = <h3> {item.name}</h3>
                const info = <h3>{item.info}</h3>

                return (
                    <div className="item" key={item.name}>
                        {img}
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