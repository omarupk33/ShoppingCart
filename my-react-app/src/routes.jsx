import Home from './Home/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import DefaultPage from './Pages/DefaultPage/DefaultPage.jsx'

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