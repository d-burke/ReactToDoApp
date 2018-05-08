import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Primary_input from './primary_input';
import Primary_button from './primary_button';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        'Create React "hello world" App',
        'Create React To Do App',
        'Create React Blog App'
      ],
      toDoListInEditMode: [false, false, false]
    };
  }

  addToDo = () => {
    let inputText = document.getElementById('inp').value;
    this.setState({ arr: this.state.arr.concat(inputText) });
    this.setState({
      toDoListInEditMode: this.state.toDoListInEditMode.concat(false)
    });
  };

  removeToDo = index => {
    let toDoList = this.state.arr;
    let nextState = toDoList.slice(0, index).concat(toDoList.slice(index + 1));
    this.setState({ arr: nextState });
    let editList = this.state.toDoListInEditMode;
    let newEditList = editList
      .slice(0, index)
      .concat(editList.slice(index + 1));
    this.setState({ toDoListInEditMode: newEditList });
  };

  editToDo = index => {
    let currentEditModes = this.state.toDoListInEditMode;
    let thisEditMode = currentEditModes[index];
    let nextEditModes = currentEditModes
      .slice(0, index)
      .concat(!thisEditMode, currentEditModes.slice(index + 1));
    this.setState({ toDoListInEditMode: nextEditModes });
  };

  replaceToDo = (index, replacementToDo) => {
    let inputText = document.getElementById('editing' + index).value;
    let toDoList = this.state.arr;
    let nextState = toDoList
      .slice(0, index)
      .concat(inputText, toDoList.slice(index + 1));
    this.setState({ arr: nextState });
    this.editToDo(index);
  };

  bodyListToDo = () => {
    return this.state.arr.map((v, i) => {
      return (
        <ToDoList
          toDo={v}
          toDoIndex={i}
          toDoEditMode={this.state.toDoListInEditMode[i]}
          replaceToDo={() => {
            this.replaceToDo(i);
          }}
          editToDo={() => {
            this.editToDo(i);
          }}
          toggleEditToDo={() => {
            this.editToDo(i);
          }}
          removeToDo={() => {
            this.removeToDo(i);
          }}
        />
      );
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h3>To Do</h3>
          <Primary_input id="inp" />
          <Primary_button text="Add To Do" callback={this.addToDo} />
        </div>
        <hr />
        {this.bodyListToDo()}
      </div>
    );
  }
}

export default App;
