import Cards from './Cards.jsx'
import './shop.css'
import { Link } from "react-router"


const Shop = ()=>{

const shoppingList = [
  {
    name: "Apple",
    info: "Fresh red fruit, sold by the pound."
  },
  {
    name: "Milk",
    info: "Whole cow's milk, 1-gallon carton."
  },
  {
    name: "Bread",
    info: "Sliced whole wheat bread loaf."
  },
  {
    name: "Eggs",
    info: "A dozen large grade-A eggs."
  },
  {
    name: "Coffee",
    info: "Medium roast ground coffee beans."
  },
    {
    name: "Cheese",
    info: "A french Cheese made of Lamp's milk."
  }
];


    return (
    <div className='shop'>
       <Cards itemList={shoppingList}></Cards>
    </div>
    )
} 

export default Shop