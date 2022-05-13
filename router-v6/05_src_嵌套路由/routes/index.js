import Home from "../pages/Home"
import About from "../pages/About"
import Message from "../pages/Message"
import News from "../pages/News"
import { Navigate } from "react-router-dom"
export const routes=[
    {
        path:'/about',
        element:<About/>
      },
      {
        path:'/home',
        element:<Home/>,
        children:[
          {
            path:'message',
            element:<Message/>
          },
          {
            path:'news',
            element:<News/>
          }
        ]
      },
      {
        path:'/',
        element:<Navigate to='/about'/>
      }
]