import Home from './Home/Home.jsx'
import Shop from './Shop/Shop.jsx'
import Cart from './Cart/Cart.jsx'
import DefaultPage from './DefaultPage/DefaultPage.jsx'

const routes = [
  {
    path: "/",
    element: <Home/>,
    children:[
      {
      index:true,
      element: <DefaultPage/>
      },

      {
      path:'shop',
      element:<Shop/>
      },

      {
      path:'cart',
      element:<Cart/>
      }
    ]
  },

]

export default routes