import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Cart from './Cart'

describe('Cart Component', ()=>{
    it('renders Cart correctly', ()=>{
        const {container} = render(<Cart/>)
        expect(container).toMatchSnapshot()
    })
    
})