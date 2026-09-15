import {describe, it, expect, beforeEach} from 'vitest'
import {render, screen, renderHook} from '@testing-library/react'
import { MemoryRouter,  useOutletContext, Route, Routes} from 'react-router'
import Cart from './Cart'
import Shop from '../Shop/Shop'

import Home from '../../Home/Home' 



describe('Cart Component', ()=>{

    it('renders with outlet context', () => {
        const container =render(
            <MemoryRouter initialEntries={['/cart']}>
            <Routes>
            <Route path="/" element={<Home/>} context={{ inCart: [], setInCart: (e)=>{inCart.push(e)}, itemCount:0}}>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/shop" element={<Shop/>}/>
            </Route>
            </Routes>
            </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot()
    });  
    
})