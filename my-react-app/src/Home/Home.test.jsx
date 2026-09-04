import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Home from './Home'

describe('Home Component', ()=>{
    it('renders Home correctly', ()=>{
        const {container} = render(<Home/>)
        expect(container).toMatchSnapshot()
    })  
})