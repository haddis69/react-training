import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add=()=>{
    const {count} = this.state
    //传统的setState是对象写法，第二个参数可以传回调，因为setState是异步，异步执行完之后就会执行这个回调
    //这个回调可以得到state里最新的数据
    //而写在setState下面是先执行这句话，setState作为异步会最后执行，所以如果写在下面不可以得到最新的state里最新的数据
    // this.setState({count:count+1},()=>{
    //   console.log('count的值是:',this.state.count)
    // })


    //setState还可以写成函数式写法，函数的两个参数分别注入的是state和props,当然第二个参数也可以传回调
    this.setState((state,props)=>{
      console.log(state,props);
      return {count:state.count+1}
    },()=>{
      console.log('回调函数中count的值是:',this.state.count)
    })
  }
  render() {
    return (
      <div>
        <div>当前的值是:{this.state.count}</div>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
