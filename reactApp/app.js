import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["x","q","a","m"];

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li><button>X</button>
    {this.props.task}</li>
  )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <ul>
            {dummyData.map((item) => <ToDo task={item}/>)}
        </ul>
    )
  }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));
