import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import primary_input from './primary_input';

const primary_button = (text, callback) => {
  return (
    <button className="primary_button" onClick={callback}>
      {text}
    </button>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['Create React "hello world" App', 'Create React To Do App'],
      toDoListInEditMode: [false, false]
    };
  }

  // logState for debugging purposed
  logState = () => {
    console.log('Current State: ', this.state);
  };

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

  render() {
    return (
      <div className="App">
        <div>
          <h3>To Do</h3>
          {/*primary_button('log State', this.logState)*/}
          {primary_input('inp', '')}
          {primary_button('Add To Do', this.addToDo)}
        </div>
        <hr />

        {this.state.arr.map((v, i) => {
          return (
            <div key={i}>
              <p>
                {v}
                {this.state.toDoListInEditMode[i] && (
                  <span>
                    <span>
                      {primary_input('editing' + i, this.state.arr[i])}
                    </span>
                    {primary_button('replace', () => {
                      this.replaceToDo(i);
                    })}
                  </span>
                )}
                {primary_button('edit mode toggle', () => {
                  this.editToDo(i);
                })}
                {primary_button('remove', () => {
                  this.removeToDo(i);
                })}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
