import {vi, describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Items from './Items';
import Item from './item';

import { MemoryRouter, Routes } from 'react-router';

describe('Items Component', ()=>{

    it('Items renders correctly', ()=>{
        const container = render(<Items/>)
        expect(container).toMatchSnapshot()
    })

    it('Shop items are on screen', ()=>{
        render(<MemoryRouter>
            <Item></Item>
        </MemoryRouter>)
        const card = screen.getByRole('region', {name:'Apple'})

        expect(card.textContent).toBe('Apple')

    })

})