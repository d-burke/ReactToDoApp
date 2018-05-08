import React, { Component } from 'react';
import PrimaryInput from './primaryInput';
import PrimaryButton from './primaryButton';

class ToDoList extends Component {
  editModeSection = () => {
    return (
      <span>
        <span>
          <PrimaryInput
            id={'editing' + this.props.toDoIndex}
            defaultValue={this.props.toDo}
          />
        </span>
        <PrimaryButton text="replace" callback={this.props.replaceToDo} />
      </span>
    );
  };

  render() {
    return (
      <div key={this.props.toDoIndex}>
        <p>
          {this.props.toDo}
          {this.props.toDoEditMode && this.editModeSection()}
          <PrimaryButton
            text="edit mode toggle"
            callback={this.props.editToDo}
          />
          <PrimaryButton text="remove" callback={this.props.removeToDo} />
        </p>
      </div>
    );
  }
}

export default ToDoList;
