import App from './App.jsx'
import Page from './Page.jsx'

const routes= [
  {
    path: "/",
    element: <App />,
  },
  {
    path:'page',
    element:<Page/>
  }
]

export default routes