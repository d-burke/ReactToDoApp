import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import primary_button from './App.css';

// const primary_button = (text, callback) => {
//   return <button onClick={callback}>{text}</button>;
// };

const primary_input = (id, defaultVal) => {
  return <input id={id} defaultValue={defaultVal} />;
};

class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['Create React "hello world" App', 'Create React To Do App']
    };
  }
  render() {
    const i = 1;
    const v = 'wordz';

    return (
      <div id="ListToDo">
        List
        <div key={i}>
          <p>
            To Do: {v}
            {primary_button('edit', () => {
              this.editToDo(i);
            })}
            <span>{primary_input('editing' + i, this.state.arr[i])}</span>
            {primary_button('remove', () => {
              this.removeToDo(i);
            })}
          </p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['Create React "hello world" App', 'Create React To Do App']
    };
  }

  logState = () => {
    console.log('Current State: ', this.state);
  };

  addToDo = () => {
    let inputText = document.getElementById('inp').value;
    this.setState({ arr: this.state.arr.concat(inputText) });
  };

  removeToDo = index => {
    // console.log('remove ToDo #', index);
    let toDoList = this.state.arr;
    // console.log('toDoList: ', toDoList);
    // edit //A: ar.slice(0,2).concat(ar.slice(3)) //remove index 2
    //ar.slice(0,2).concat(ar.slice(3))
    let nextState = toDoList.slice(0, index).concat(toDoList.slice(index + 1));
    // console.log('nextState: ', nextState);
    this.setState({ arr: nextState });
  };

  editToDo = (index, replacementToDo) => {
    // console.log('edit ToDo #', index);
    let inputText = document.getElementById('editing' + index).value;
    // console.log('inputText: ', inputText);
    let toDoList = this.state.arr;
    // console.log('toDoList: ', toDoList);

    let nextState = toDoList
      .slice(0, index)
      .concat(inputText, toDoList.slice(index + 1));
    // console.log('nextState: ', nextState);
    this.setState({ arr: nextState });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h3>To Do</h3>
          {primary_button('log State', this.logState)}
          {primary_input('inp', '')}
          {primary_button('Add To Do', this.addToDo)}
        </div>
        <hr />

        {this.state.arr.map((v, i) => {
          return (
            <div key={i}>
              <p>
                To Do: {v}
                {primary_button('edit', () => {
                  this.editToDo(i);
                })}
                <span>{primary_input('editing' + i, this.state.arr[i])}</span>
                {primary_button('remove', () => {
                  this.removeToDo(i);
                })}
              </p>
            </div>
          );
        })}
        <ListToDo />
      </div>
    );
  }
}

export default ListToDo;
