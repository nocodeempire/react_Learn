import React, { Component } from 'react';
import "./app.css";
import 'antd/dist/antd.css'; 
import { Input, Button, List } from 'antd';
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.submitFun = this.submitFun.bind(this);
    this.storechange = this.storechange.bind(this);
    this.state = store.getState();
    store.subscribe(this.storechange);
  }
  render() {
    return (
      <div className="App">
        <Input onChange={this.changeValue} placeholder="Basic usage" style={{width: 300}} value={this.state.value}/>
        <Button type="primary" onClick={this.submitFun}>提交</Button> 
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>}
        ></List>
      </div>
    );
  }
  changeValue(e) {
    const action = {
      type: "change-Value",
      value: e.target.value
    }
    store.dispatch(action);
  }
  submitFun() {
    const action = {
      type: "submit-Value"
    }
    store.dispatch(action);
  }
  storechange() {
    this.setState(store.getState())
  }
  deleteItem(index) {
    const action = {
      type: "delete-Item",
      index: index
    }
    store.dispatch(action);
  }
}

export default App;
