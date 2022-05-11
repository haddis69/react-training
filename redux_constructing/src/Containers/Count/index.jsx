import React, { Component } from "react";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'
import {connect} from 'react-redux'
//#region
//components文件夹后期已经在优化中被合并到了容器组件(container)中
//container是一个容器，components里的Count是它的子组件
//在这里引入connect方法可以连接store和components里的Count
//至于connect()(CountUI)这个写法，是固定的写法
//暴露出去之后，在App.js里就可以通过<Count store={store}/>这种传值方式连接store
//store不是在这里连接的，是在App.js里连接的
//CountUI里不能写任何关于redux的函数，要全部删除干净，CountUI里只能写呈现数据到页面

//connect(mapStateToProps,mapDispatchToProps)(CountUI)里(mapStateToProps,mapDispatchToProps)两个形参有特殊意义
// 本组件没有引入store,因为已经连接了store
//由于前面已经在App.js里连接了store，并且CountUI是本组件的子组件(通过connect传进去的):
//第一个参数mapStateToProps，返回值是传给CountUI的props,里面形参state能看见store.getState()的返回值
//第二个参数mapDispatchToProps，返回值是给CountUI的方法，CountUI可以通过this.props调用
//mapDispatchToProps的形参dispatch能看见store.dispatch方法，在每个给CountUI的方法可以使用dispatch，等价于store.dispatch

// function mapStateToProps(state){
//     return {count:state}
// }
// function mapDispatchToProps(dispatch){
//     return {
//         increment:(data)=>{
//             dispatch(createIncrementAction(data))
//         },
//         decrement:(data)=>{
//             dispatch(createDecrementAction(data))
//         },
//         incrementasync:(data,time)=>{
//             dispatch(createIncrementAsyncAction(data,time))
//         }
//     }
// }


// 这是connect的简写形式
//第二个参数mapDispatchToProps：可以只传方法名和action，不需要再写dispatch
//而且最重要的，不需要再传形参了，
//因为CountUI里通过this.props调用increment方法时了一个参数，createIncrementAction里也有一个形参
//同理this.props调用incrementasync穿了两个参数，createIncrementAsyncAction里也有两个形参
//所以就不用传参了，直接写action名就可以了，这是react-redux底层维护好的设定
//#endregion

//整合UI组件到一个组件
class Count extends Component {
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
          <h2>我是Count组件,下方人数为:{this.props.personCounts}</h2>
          <h4>当前求和为:{this.props.count}</h4>
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
export default connect(
    state=>({count:state.count,personCounts:state.persons.length}),
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementasync:createIncrementAsyncAction
    }
)(Count);