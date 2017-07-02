import React from 'react';
import InputLine from './InputLine';
import ToDo from './ToDo';
import ToDoList from './ToDoList';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: [{ taskText: "Catch 'em all", completed: false },{ taskText: "Raichu", completed: true },{ taskText: "Gengar", completed: false },{ taskText: "Mewtwo", completed: true }]
    })
  }

  render() {
    return (
      <div>
      <InputLine />
      <ToDoList todos={this.state.todos}/>
    </div>
    )
  };
}

export default ToDoApp;
