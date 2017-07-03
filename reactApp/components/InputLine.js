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
    return (
      this.setState({
        typedText: event.target.value
      })
    )
  }

  handleSubmit() {
    return (
      this.props.submit(this.state.typedText),
      this.setState({
        typedText: ""
      })
    )
  }

  render() {
    return (
        <div>
          <input type="text" name="newTask" value={this.state.typedText} placeholder="New Task" onChange={(event) => this.handleTyping(event)}></input>
          <input type="submit" value="Add todo" onClick={(e) => this.handleSubmit(e)}></input>
        </div>
    )
  }
}

export default InputLine;
