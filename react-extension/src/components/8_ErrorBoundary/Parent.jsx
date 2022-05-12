import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  state = { hasError: "" };
  //getDerivedStateFromError这也是个钩子，不过不常用
  //这个组件的子组件出错，就找它的父组件写入getDerivedStateFromError
  //注意：自己组件内出错不能用错误边界，并且getDerivedStateFromError只能用于钩子中的错误，一般是render,不能是自定义函数
  //返回一个对象，相当于setState
  //错误边界可以保证一个稳健的错误不外扩，页面也能正常展示而不至于崩掉
  //开发环境不能正常使用错误边界，闪一下屏就没了，还是会报错
  //打包之后就可以正常使用
  static getDerivedStateFromError(error) {
    return { hasError: error };
  }
  componentDidCatch() {
    console.log("此处一般统计错误,发送给后台服务器来及时解决bug");
  }
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>网络繁忙请稍后再试</h2> : <Child />}
      </div>
    );
  }
}
