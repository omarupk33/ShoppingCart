import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import DefaultPage from './DefaultPage'
import { MemoryRouter, RouterProvider } from 'react-router'
import routes from '../routes'

describe('DefaultPage Component', ()=>{
    it('renders DefaultPage correctly', ()=>{
        const {container} = render(
        <MemoryRouter>
        <DefaultPage/>
        </MemoryRouter>)
        
        expect(container).toMatchSnapshot()
    })
    
})