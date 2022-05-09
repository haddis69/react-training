import React,{Component} from 'react'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
export default class App extends Component{
  state={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false}
  ]}
  addTodo=(todoObj)=>{
    const {todos}=this.state;
    //往前添加
    const newTodos=[todoObj,...todos];
    this.setState({
      todos:newTodos
    })
  }
  //这个函数给item用于往App传数据
  updateTodo=(id,done)=>{
    const {todos}=this.state;
    //在state里修改done(是否被勾选)的值
    const newTodos = todos.map(todoObj=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({
      todos:newTodos
    })
  }

  render(){
    const {todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer />
        </div>
      </div>
    );
  }
}
