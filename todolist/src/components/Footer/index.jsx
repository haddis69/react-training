import React, { Component } from "react";
import './index.css'
export default class Footer extends Component {
  checkAll(event){
    this.props.handleAllCheck(event.target.checked);
  }
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={(event)=>this.checkAll(event)} checked={this.props.countDone===this.props.todoLength&&this.props.countDone!==0}/>
        </label>
        <span>
          <span>已完成{this.props.countDone}</span> / 全部{this.props.todoLength}
        </span>
        <button className="btn btn-danger" onClick={this.props.deleteAllDone}>清除已完成任务</button>
      </div>
    );
  }
}
