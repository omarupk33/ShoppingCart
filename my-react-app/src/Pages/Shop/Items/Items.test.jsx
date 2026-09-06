import {vi, describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Items from './Items';

describe('Items Component', ()=>{
    beforeEach(() => {
    render(<Items/>);
    });

    it('Items renders correctly', ()=>{
        const container = render(<Items/>)
        expect(container).toMatchSnapshot()
    })



    // it('Shop items are on screen', ()=>{

    //     const card = screen.getByRole('region', {name:'Apple'})

    //     expect(card.textContent).toBe('Apple')

    // })

})