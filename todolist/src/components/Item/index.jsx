import React, { Component } from "react";
import './index.css'
export default class Item extends Component {
  state={mouse:false}
  handleMouse=(flag)=>{
    this.setState({mouse:flag})
  }
  //传入顺序，event,id
  //checkbox是否选中是checked不是value
  //这里是item,要通知最外层的App改变state的todos的属性，要隔代向上层传递
  handleCheck=(event,id)=>{
    //祖辈组件传过来的 updateTodo=(id,done)=>{}
    this.props.updateTodo(id,event.target.checked);
  }
  //deleteTodo=(id)=>{}
  handleDelete=(id)=>{
    if(window.confirm('你确定删除吗')){
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id,name,done} = this.props
    return (
      //li只是某一个li，进入它或者离开它，从而引起state的变化都是它这一个li的行为
      //我们之所以看到页面有这么多li，是因为在List组件里采用了map循环遍历
      //进入或者离开谁的时候，谁就触发这个动态的backgroundColor切换这件事，与其它li无关
      <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} onMouseEnter={()=>this.handleMouse(true)} onMouseLeave={()=>this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={(event)=>this.handleCheck(event,id)}/>
          <span>{name}</span>
        </label>
        {/**这里同理 */}
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>
          删除
        </button>
      </li>
    );
  }
}
