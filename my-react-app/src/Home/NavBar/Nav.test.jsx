import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Nav from './Nav'
import routes from '../../routes'
import { MemoryRouter, RouterProvider} from 'react-router'

describe('Nav Component', ()=>{
    it('renders Nav correctly', ()=>{
        const {container} = render(
            <MemoryRouter>
                <Nav></Nav>
            </MemoryRouter>            
        )

        expect(container).toMatchSnapshot()
    })  

    it('Nav options exist as supposed to be', ()=>{
        render(<MemoryRouter><Nav></Nav></MemoryRouter>)
        
        const AllNavigationBtns = screen.getAllByRole('listitem')
        expect(AllNavigationBtns).toHaveLength(3)

        const home = AllNavigationBtns[0]
        expect(home.textContent).toBe('Home')
        expect(home).toBeInTheDocument()

        const shop = AllNavigationBtns[1]
        expect(shop.textContent).toBe('Shop')
        expect(shop).toBeInTheDocument()
        
        const cart = AllNavigationBtns[2]
        expect(cart.textContent).toBe('Cart')
        expect(cart).toBeInTheDocument()
    
    })
})