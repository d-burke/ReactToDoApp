import React, { Component } from 'react';

class PrimaryButton extends Component {
    render() {
        return (
            <button className="primary_button" onClick={this.props.callback}>
                {this.props.text}
            </button>
        );
    }
}

export default PrimaryButton;
