import React from 'react'
import { NavLink,useRoutes} from 'react-router-dom'
import { routes } from './routes'
import Header from './components/Header'
export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
    <div className="row">
      <Header/>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          <NavLink className='list-group-item'to='/about'>About</NavLink>
          <NavLink className='list-group-item' to='/home' end>Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {element}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
