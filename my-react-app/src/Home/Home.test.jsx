import { createRoutesStub, href, MemoryRouter } from "react-router";
import routes from '../routes'
import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Home from './Home'

describe('Home Component', ()=>{
    it('renders Home correctly', ()=>{
        const {container} = render(
            <MemoryRouter>
            <Home/>
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })  

    it('Header Nav works Correctly', ()=>{
        const {container} = render(
            <MemoryRouter>
            <Home/>
            </MemoryRouter>
        )

        const links = screen.getAllByRole('link')

        expect(links.length).toEqual(3)
        expect(links[0].textContent).toBe('Home')
        expect(links[1].textContent).toBe('Shop')
        expect(links[2].textContent).toBe('Cart')

    })  


})
