import React, { Component } from "react";
import store from "../../redux/store";
export default class Count extends Component {
  increment = () => {
    const data = this.selectNum.value * 1;
    store.dispatch({
      type: "increment",
      data,
    });
  };
  decrement = () => {
    const data = this.selectNum.value * 1;
    store.dispatch({
      type: "decrement",
      data,
    });
  };
  addOdd = () => {
    const sum = store.getState();
    const data = this.selectNum.value * 1;
    if (sum % 2 !== 0) {
      store.dispatch({
        type: "increment",
        data,
      });
    }
  };
  addAsync = () => {
    const data = this.selectNum.value * 1;
    setTimeout(() => {
      store.dispatch({
        type: "increment",
        data,
      });
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
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
