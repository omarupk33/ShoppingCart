import {vi, describe, it, expect} from 'vitest'
import {render ,screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Shop from './Shop'

describe('Shop Component', ()=>{
    beforeEach(() => {
      render(<Shop/>);
    });

    it('renders Shop correctly', ()=>{
        const container = render(<Shop/>)
        expect(container).toMatchSnapshot()
    }) 
})