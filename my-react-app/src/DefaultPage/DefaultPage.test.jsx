import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import DefaultPage from './DefaultPage'

describe('DefaultPage Component', ()=>{
    it('renders DefaultPage correctly', ()=>{
        const {container} = render(<DefaultPage/>)
        expect(container).toMatchSnapshot()
    })
    
})