import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  increment = () => {
    const { count } = this.state;
    const num = this.selectNum.value * 1;
    this.setState({
      count: count + num,
    });
  };
  decrement = () => {
    const { count } = this.state;
    const num = this.selectNum.value * 1;
    this.setState({
      count: count - num,
    });
  };
  addOdd = () => {
    const { count } = this.state;
    const num = this.selectNum.value * 1;
    if (count % 2 !== 0) {
      this.setState({
        count: count + num,
      });
    }
  };
  addAsync = () => {
    const { count } = this.state;
    const num = this.selectNum.value * 1;
    setTimeout(() => {
      this.setState({
        count: count + num,
      });
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
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
