import React, { Component } from 'react';

class PrimaryInput extends Component {
    render() {
        return (
            <textarea
                id={this.props.id}
                className="primary_input"
                defaultValue={this.props.defaultVal}
            />
        );
    }
}

export default PrimaryInput;
