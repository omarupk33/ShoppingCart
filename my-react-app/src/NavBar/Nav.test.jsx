import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Nav from './Nav'

describe('Nav Component', ()=>{
    it('renders Nav correctly', ()=>{
        const {container} = render(<Nav/>)
        expect(container).toMatchSnapshot()
    })  
})