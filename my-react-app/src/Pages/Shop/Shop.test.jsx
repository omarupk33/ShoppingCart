import {vi, describe, it, expect} from 'vitest'
import { MemoryRouter, useOutletContext } from 'react-router';
import {render ,screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Shop from './Shop'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext:  { setInCart: vi.fn(), itemCount:0, setItemCount:vi.fn()}
  };
});


describe('Shop Component', ()=>{
    beforeEach(() => {

      render(
      <MemoryRouter>
      <Shop/>
      </MemoryRouter>);
      });

    it('renders Shop correctly', ()=>{
        const container = render(<Shop/>)
        expect(container).toMatchSnapshot()
    }) 
})