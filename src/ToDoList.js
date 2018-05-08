import React, { Component } from 'react';
import Primary_input from './primary_input';
import Primary_button from './primary_button';

class ToDoList extends Component {
  editModeSection = () => {
    return (
      <span>
        <span>
          <Primary_input
            id={'editing' + this.props.toDoIndex}
            defaultValue={this.props.toDo}
          />
        </span>
        <Primary_button text="replace" callback={this.props.replaceToDo} />
      </span>
    );
  };

  render() {
    return (
      <div key={this.props.toDoIndex}>
        <p>
          {this.props.toDo}
          {this.props.toDoEditMode && this.editModeSection()}
          <Primary_button
            text="edit mode toggle"
            callback={this.props.editToDo}
          />
          <Primary_button text="remove" callback={this.props.removeToDo} />
        </p>
      </div>
    );
  }
}

export default ToDoList;
