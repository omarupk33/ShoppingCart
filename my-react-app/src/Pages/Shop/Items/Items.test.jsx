import {vi, describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Items from './Items';
import Item from './item';

import { MemoryRouter, Routes} from 'react-router';



    vi.mock('react-router', async (importOriginal)=>{
        const actual = importOriginal()

        return { ...actual,MemoryRouter: ({ children }) => <div>{children}</div>,
        useOutletContext: ()=> ({ setInCart:()=>{}, itemCount:[], setItemCount:()=>{}})}
        
    })

describe('Items Component', ()=>{



    it('Items renders correctly', ()=>{
        const container = render(<Items/>)
        expect(container).toMatchSnapshot()
    })

    it('Shop Elements are working properly', ()=>{    


        render(<MemoryRouter>
            <Item name={'Apple'} info={'delicious apple'} image={''} 
                number={1} item={{}}></Item>
        </MemoryRouter>)

        // Solve this
        const title = screen.getByRole('heading', {name:'Apple'})

        expect(title.textContent
        ).toBe('Apple')

        const info = screen.getByRole('heading', {name:'delicious apple'})

        expect(info.textContent
        ).toBe('delicious apple')

        const CartBtn = screen.getByRole('button', {name:"Add To Cart"})
        expect(CartBtn).toBeInTheDocument()


    })

})