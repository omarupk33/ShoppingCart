import { useState } from 'react'
import { Outlet, Link, useParams } from "react-router";
import './home.css'
import Header from './Header'
import Footer from './Footer'

function Home() {
  
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
