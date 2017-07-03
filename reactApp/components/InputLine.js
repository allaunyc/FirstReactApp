import React from 'react';
import ToDoApp from './ToDoApp';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <input type="text" name="newTask" placeholder="New Task"></input>
          <input type="submit" value="Add todo" onClick={() => this.props.submit("Task Test")}></input>
        </div>
    )
  }
}

export default InputLine;
