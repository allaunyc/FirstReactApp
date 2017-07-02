import React from 'react';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li><button>X</button>
    {this.props.completed ? <strike>{this.props.task}</strike> :this.props.task }
  </li>
  )
  }
}

export default ToDo;
