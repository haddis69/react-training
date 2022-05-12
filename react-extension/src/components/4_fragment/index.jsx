import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      //Fragment可以被忽略，但同样起到了根标签的效果
      //写一个空标签 <> </>也可以，但是不能写key和props，即不能有任何值的传入，必须是空白
      <Fragment>
        <input></input>
        &nbsp;
        <input></input>
      </Fragment>
    )
  }
}
