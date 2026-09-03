import { useState } from 'react'
import { Outlet, Link, useParams } from "react-router";
import './home.css'
import Header from './Header'
import DefaultPage from '../DefaultPage/DefaultPage'
import Footer from './Footer'
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
function Home() {

    const {name} = useParams()  
  
    return (
      <div className='home-container'>
      <Header>
        </Header>
      <Outlet></Outlet>
      <Footer>
        </Footer> 
      </div>
    )
}

export default Home
