import React from 'react';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
    <li><button onClick={this.props.xClick}>X</button>
    {this.props.completed ? <strike onClick={this.props.xToggle}>{this.props.task}</strike> :<span onClick={this.props.xToggle}>{this.props.task}</span>}
  </li>
  </div>
  )
  }
}

export default ToDo;
