import React from 'react';
import ToDoApp from './ToDoApp';

class InputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: ""
    }
  }

  handleTyping(event) {
      this.setState({
        typedText: event.target.value
      })
  }

  handleSubmit() {
      event.preventDefault();
      this.props.submit(this.state.typedText)
      this.setState({
        typedText: ""
      })
  }

  render() {
    return (
        <div>
          <input type="text" name="newTask" value={this.state.typedText} placeholder="New Task" onChange={(event) => this.handleTyping(event)}></input>
          <input type="submit" value="Add todo" onClick={(event) => this.handleSubmit(event)}></input>
        </div>
    )
  }
}

export default InputLine;
