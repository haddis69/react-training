import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
// import Home from "./components/Home";
// import About from "./components/About";


//先从react中引入lazy函数和Suspense函数
//改变传统的引入方式
//这样引入就会实现懒加载:const Home = lazy(() => import("./components/Home"));
//把引入过程写入lazy的回调里
// 在引入组件时包裹在Suspense组件里，并且Suspense可以传入fallback，值可以是一个jsx或者一个组件
//传入的值或者组件可以在加载过程中显示，即Loading...的效果
//如果传入值是一个组件，这个组件不可以使用懒加载的方式引入

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
