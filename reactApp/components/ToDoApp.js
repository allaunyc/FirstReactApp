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
    // this.addTodo = this.addTodo.bind(this)
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

  render() {
    return (
      <div>
      <InputLine submit={(e) => this.addTodo(e)}/>
      <ToDoList todos={this.state.todos}/>
    </div>
    )
  };
}

export default ToDoApp;
