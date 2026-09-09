import { useState, useEffect } from 'react'
import { Outlet,} from "react-router"
import './home.css'
import Header from './Header'
import Footer from './Footer'

function Home() {

    const [inCart, setInCart] = useState([])
    const[numberOfItems, setNumberOfItems] = useState(0)
        useEffect(()=>{
        setNumberOfItems(inCart.length)
        }, [inCart])

    return (
      <div className='home-container'>
      <Header numberOfItems={numberOfItems}>
        </Header>
      <Outlet context={{inCart, setInCart, numberOfItems, setNumberOfItems}}></Outlet>
      <Footer>
        </Footer> 
      </div>
    )
}

export default Home
