import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { NavLink, Routes,Route ,Navigate} from 'react-router-dom'
export default function App() {
  function computedClassName({isActive}){
    return isActive?'list-group-item atguigu':'list-group-item'
  }
  return (
    <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/**
            NavLink如果想自定义高亮效果，需要传入一个函数，函数的参数中可以解构出isActive
            isActive有true和false两种值
          */}
          <NavLink className={({isActive})=>isActive?'list-group-item atguigu':'list-group-item'} to='/about'>About</NavLink>
          <NavLink className={computedClassName} to='/home'>Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Routes>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/' element={<Navigate to='/about'/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
