import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
class Person extends Component {
  addPerson=()=>{
      const name=this.nameNode.value;
      const age=this.ageNode.value;
      let personObj={id:nanoid(),name,age};
      //注意这里是小写，是下边传过来的
      this.props.addperson(personObj);
      //置空输入框
      this.nameNode.value='';
      this.ageNode.value=''
  }
  render() {
    return (
      <div>
        <h2>我是Person组件,上方求和为:{this.props.count}</h2>
        <input ref={c=>this.nameNode=c} placeholder='输入名字'></input>&nbsp;
        <input ref={c=>this.ageNode=c} placeholder='输入年龄'></input>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
            {
              this.props.persons.map(person=>{
                return <li key={person.id}>姓名{person.name}---年龄{person.age}</li>
              })
            }
        </ul>
      </div>
    )
  }
}
export default connect(
  state=>({persons:state.persons,count:state.count}),
  {
    addperson:createAddPersonAction
  }
)(Person)
