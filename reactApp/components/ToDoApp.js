import React from 'react';
import InputLine from './InputLine';
import ToDo from './ToDo';
import ToDoList from './ToDoList';

 const dummyData = [{ taskText: "Catch 'em all", completed: false },{ taskText: "Raichu", completed: true },{ taskText: "Gengar", completed: false },{ taskText: "Mewtwo", completed: true }];

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  addTodo(task) {
    let tempArr = this.state.todos;
    tempArr.push({taskText: task, completeted: false})
    this.setState({
      todos: tempArr
      })
  }

  removeTodo(index) {
      let tempArr = this.state.todos;
      tempArr.splice(index, 1)
      this.setState({
        todos: tempArr
      })
  }

  toggleTodo(index) {
      let tempArr = this.state.todos;
      tempArr[index].completed = !tempArr[index].completed;
      this.setState({
        todos: tempArr
      })
  }

  render() {
    return (
      <div>
      <InputLine submit={(task) => this.addTodo(task)}/>
      <ToDoList todos={this.state.todos} todoXClick={(index) => this.removeTodo(index)} todoXToggle={(index) => this.toggleTodo(index)}/>
    </div>
      )
  };
}

export default ToDoApp;
