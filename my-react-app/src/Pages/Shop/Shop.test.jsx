import {vi, describe, it, expect} from 'vitest'
import { MemoryRouter, useOutletContext, Routes, Route} from 'react-router';
import {render ,screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Shop from './Shop'
import Home from '../../Home/Home'



describe('Shop Component', ()=>{


    it('renders Shop correctly', ()=>{
          const container =render(
            <MemoryRouter initialEntries={['/shop']}>
            <Routes>
            <Route path="/" element={<Home/>} >
            <Route path="/shop" element={<Shop/>}/>
            </Route>
            </Routes>
            </MemoryRouter>

        );
   
      expect(container).toMatchSnapshot()
      }) 

   it('items are on the screen', async ()=>{

      render(
      <MemoryRouter initialEntries={['/shop']}>
      <Routes>
      <Route path="/" element={<Home/>} >
      <Route path="/shop" element={<Shop/>}/>
      </Route>
      </Routes>
      </MemoryRouter>
      );

      const item_container = screen.getByRole('region')
   
      expect(typeof item_container).toEqual('object')

      const item = item_container.querySelector('.item')

      expect(item.querySelector('h3').textContent).toMatch('Apple')

      })



})


