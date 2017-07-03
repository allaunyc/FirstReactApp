import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <ul>
            {this.props.todos.map((item, index) => <ToDo task={item.taskText} completed={item.completed}
            xClick={() => this.props.todoXClick(index)} xToggle={() => this.props.todoXToggle(index)}/>)}
        </ul>
    )
  };
}

export default ToDoList;
