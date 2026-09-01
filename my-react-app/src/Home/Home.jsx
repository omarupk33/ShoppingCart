import { useState } from 'react'
// Go through the children and use Link to go to a specific page
import { Outlet, Link } from "react-router";
import './home.css'
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
function Home() {

  return (
    <div className='home-container'>
    <Header>
      </Header>

    <Main>
      </Main> 

    <Footer>
      </Footer> 
    </div>
  )
}

export default Home
