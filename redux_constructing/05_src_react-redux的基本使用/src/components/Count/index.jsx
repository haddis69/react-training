import React, { Component } from "react";
export default class Count extends Component {
  increment = () => {
    const data = this.selectNum.value * 1;
    this.props.increment(data);
  };
  decrement = () => {
    const data = this.selectNum.value * 1;
    this.props.decrement(data);
  };
  addOdd = () => {
    const data = this.selectNum.value * 1;
    const sum = this.props.count;
    if(sum%2!==0){
      this.props.increment(data);
    }
  };
  addAsync = () => {
    const data = this.selectNum.value * 1;
    this.props.incrementasync(data,500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <br></br>
        <select ref={(c) => (this.selectNum = c)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.addOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.addAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
