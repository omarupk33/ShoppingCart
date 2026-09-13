import {describe, it, expect, beforeEach} from 'vitest'
import {render, screen, renderHook} from '@testing-library/react'
import { MemoryRouter,  useOutletContext, Route, Routes} from 'react-router'
import Cart from './Cart'
import Home from '../../Home/Home' 



describe('Cart Component', ()=>{
    // beforeEach(()=>{
    //     render(
    //             <MemoryRouter initialEntries={['/cart']}>
    //             <Routes>
    //             <Route path="/" element={<Home/>} context={{ inCart: [], setInCart: (e)=>{inCart.push(e)}, itemCount:0}}>
    //             <Route path="/cart" element={<Cart/>}/>
    //             </Route>
    //             </Routes>
    //             </MemoryRouter>
    //         );
    // })

    it('renders with outlet context', () => {
        const container =render(
            <MemoryRouter initialEntries={['/cart']}>
            <Routes>
            <Route path="/" element={<Home/>} context={{ inCart: [], setInCart: (e)=>{inCart.push(e)}, itemCount:0}}>
            <Route path="/cart" element={<Cart/>}/>
            </Route>
            </Routes>
            </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot()
    });

    it('context working properly', ()=>{

    const container = render(
            <MemoryRouter initialEntries={['/cart']}>
            <Routes>
            <Route path="/" element={<Home/>} context={{ inCart: [], setInCart: (e)=>{inCart.push(e)}, itemCount:0}}>
            <Route path="/cart" element={<Cart/>}/>
            </Route>
            </Routes>
            </MemoryRouter>
        );
// It doesn't wanna work here
    const {inCart, setInCart, itemCount} = renderHook(() => useOutletContext(), container)
    
    
    expect(inCart).toBe([])

    setInCart('Om')
    expect(inCart).toBe(['Om'])

    expect(itemCount).toEqual(0)
    })

    
})