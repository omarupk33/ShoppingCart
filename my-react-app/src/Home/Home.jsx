import { useState } from 'react'
import { Outlet, Link, useParams } from "react-router";
import './home.css'
import Header from './Header'
import Footer from './Footer'

function Home() {

    const [inCart, setInCart] = useState([]);
  
    return (
      <div className='home-container'>
      <Header>
        </Header>
      <Outlet context={{inCart, setInCart}}></Outlet>
      <Footer>
        </Footer> 
      </div>
    )
}

export default Home
