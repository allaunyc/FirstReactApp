import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <ul>
            {this.props.todos.map((item) => <ToDo task={item.taskText} completed={item.completed}/>)}
        </ul>
    )
  };
}

export default ToDoList;
