import React, { PureComponent } from "react";
import "./index.css";
export default class Parent extends PureComponent {
  state = { carName: "奔驰c63" };

  // shouldComponentUpdate注入了两个参数nextProps,nextState,表示下一次页面变化后的props和state值
  //在父组件和子组件里这么判断当然是可行的，但是有些麻烦
  //可以引入PureComponent直接实现该功能
  //   shouldComponentUpdate(_, nextState) {
  //     if (nextState.carName === this.state.carName) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }

  changeCar = () => {
    //但是PureComponent也有不足之处，它是浅比较，比较的是state这个对象的地址而不关注里面的值变化
    //这样改变state也不会刷新页面
    //   const obj =this.state;
    //   obj.carName='迈巴赫';
    //   this.setState(obj)

    this.setState({ carName: "迈巴赫" });
    // this.setState({})
  };
  render() {
    console.log("Parent---render");
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <h4>我的车的名字是{this.state.carName}</h4>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={this.state.carName} />
      </div>
    );
  }
}
class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     if (nextProps.carName === this.props.carName) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>我是Child组件,我接收到的车是:{this.props.carName}</h3>
      </div>
    );
  }
}
