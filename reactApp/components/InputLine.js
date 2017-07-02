import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <input type="text" name="newTask" placeholder="New Task"></input>
          <input type="submit" value="Add todo"></input>
        </div>
    )
  }
}

export default InputLine;
