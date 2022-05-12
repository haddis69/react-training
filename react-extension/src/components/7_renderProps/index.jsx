import React, { Component } from "react";
import "./index.css";

//可以给子组件标签写一个render属性(当然其它字段也可以，写render是为了增加可读性)
//render的值是一个函数，返回值是一个组件(孙组件)，当然也可以给这个孙组件写入props
//具体形式是这样的: <A render={(name)=><B name={name}/>} /> 孙组件props的值是这个函数的形参

//子组件中 this.props.render(name)，就能调用上面的函数，也就相当于把孙组件写了进去并且赋了props
//props的具体值可以在这个子组件里传入

//孙组件中 通过props就能取到值

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A render={(name)=><B name={name}/>} />
      </div>
    );
  }
}
class A extends Component {
  state={name:'jack'}
  render() {
    const {name} = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(name)}
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>我是B组件,我收到的名字:{this.props.name}</h3>
      </div>
    );
  }
}

