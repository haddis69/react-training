import React, { Component, createContext } from "react";
import "./index.css";
const MyContext = createContext();
export default class A extends Component {
  state = { username: "Tom", age: 18 };
  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h2>我是A组件</h2>
        <h2>
          我的用户名是{this.state.username},年龄是{this.state.age}
        </h2>
        <MyContext.Provider value={{ username, age }}>
          <B />
        </MyContext.Provider>
      </div>
    );
  }
}
class B extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="child">
        <h2>我是B组件</h2>
        <h2>
          我的用户名是:{this.context.username},年龄是：{this.context.age}
        </h2>
        <C />
      </div>
    );
  }
}
// class C extends Component {
//   static contextType = MyContext;
//   render() {
//     return (
//       <div className="grand">
//         <h2>我是C组件</h2>
//         <h2>
//           我的用户名是:{this.context.username},年龄是：{this.context.age}
//         </h2>
//       </div>
//     );
//   }
// }
function C() {
  return (
    <div className="grand-child">
      <h2>我是C组件</h2>
      <h2>
        我的用户名是:<MyContext.Consumer>
            {
                value=>{
                    return `${value.username},年龄是${value.age}`
                }
            }
        </MyContext.Consumer>
      </h2>
    </div>
  );
}

//属性隔代传递
//先从react中引入createContext方法并调用，返回一个实例MyContext(名字非固定)
//祖组件要给他的子组件包裹在MyContext.Provider组件标签中，这样自这个子组件开始，以及它的后代，都能看到传递的value
//具体格式为 <MyContext.Provider value={{ username, age }}> </MyContext.Provider>
//类式组件中，谁想被传递属性，就要先声明static contextType = MyContext; contextType字段固定
//然后就可以在this.context按key取value

//如果是函数式组件，要使用<MyContext.Consumer>包裹要拿到值的地方，里面在{}大括号写一个函数
//形参可以是value,value就等效于类式组件中的this.context,可以按照模板字符串取值
