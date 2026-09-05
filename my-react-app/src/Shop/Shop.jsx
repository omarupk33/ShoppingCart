import Items from './Items/Items.jsx';
import Cards from './Items/Items.jsx'
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
       <Items itemList={shoppingList}></Items>
    </div>
    )
} 

export default Shop