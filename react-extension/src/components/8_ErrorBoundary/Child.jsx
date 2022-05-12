import React, { Component, Fragment } from "react";

export default class Child extends Component {
  state = {
    persons: [
      { id: "001", name: "tom", age: 18 },
      { id: "002", name: "jerry", age: 19 },
      { id: "003", name: "peiqi", age: 20 },
    ],
    //故意写出错误代码
    // persons:'abc'
  };
  render() {
    return (
      <Fragment>
        <h2>我是Child组件</h2>
        {this.state.persons.map((personObj) => {
          return (
            <h4 key={personObj.id}>
              姓名:{personObj.name}---年龄:{personObj.age}
            </h4>
          );
        })}
      </Fragment>
    );
  }
}
