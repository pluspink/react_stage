import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {
  handleKeyUp = (event) => {
    let This = this;
    //解构赋值获取keyCode, target
    const { keyCode, target } = event;
    if (keyCode === 13) {
      console.log(This);
      if (target.value.trim() === '') {
        alert('输入不能为空');
        return;
      }
      //准备一个todo对象
      const todoObj = { id: nanoid(), name: target.value, done: false };
      This.props.addToDo(todoObj);

      //清空输入
      target.value = '';
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
