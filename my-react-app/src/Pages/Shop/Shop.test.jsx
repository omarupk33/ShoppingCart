import {vi, describe, it, expect} from 'vitest'
import { MemoryRouter, useOutletContext } from 'react-router';
import {render ,screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Shop from './Shop'

// vi.mock('react-router-dom', async () => {
//   const actual = await vi.importActual('react-router-dom');
//   return {
//     ...actual,
//     useOutletContext:  { setInshop: vi.fn(), itemCount:0, setItemCount:vi.fn()}
//   };
// });


describe('Shop Component', ()=>{
    beforeEach(() => {

      render(
      <MemoryRouter>
      <Shop/>
      </MemoryRouter>);
      });

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
    }) 
})