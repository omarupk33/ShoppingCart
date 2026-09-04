import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Shop from './Shop'

describe('Shop Component', ()=>{
    it('renders Shop correctly', ()=>{
        const {container} = render(<Shop/>)
        expect(container).toMatchSnapshot()
    })  
})