import React, { Component } from "react";
import axios from 'axios'
import './index.css'
export default class Search extends Component {
  search=()=>{
  this.props.updateAppState({isFirst:false,isLoading:true})
  const {keyWordElement:{value}}=this;
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response=>{this.props.updateAppState({isLoading:false,users:response.data.items})},
      error=>{this.props.updateAppState({err:error.message,isLoading:false})}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
