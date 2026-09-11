import { useEffect, useState } from 'react';
import Items from './Items/Items.jsx';
import './shop.css'


const Shop = ()=>{
  

  const shoppingList = [
  {
    name: "Apple",
    info: "Fresh red fruit, sold by the pound.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple%20fruit.jpg",
  },
  {
    name: "Milk",
    info: "Whole cow's milk, 1-gallon carton.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Milk%20glass.jpg",
  },
  {
    name: "Bread",
    info: "Sliced whole wheat bread loaf.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bread%20loaf.jpg",
  },
  {
    name: "Eggs",
    info: "A dozen large grade-A eggs.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg.jpg",
  },
  {
    name: "Coffee",
    info: "Medium roast ground coffee beans.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Coffee%20Cup.jpg",
  },
    {
    name: "Cheese",
    info: "A french Cheese made of Lamp's milk.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheese.jpg",
  }
];




    return (
    <div className='shop'>
       <Items shoppingList={shoppingList}></Items>
    </div>
    )
} 

export default Shop