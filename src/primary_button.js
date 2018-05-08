import React, { Component } from 'react';

class Primary_button extends Component {
    render() {
        return (
            <button className="primary_button" onClick={this.props.callback}>
                {this.props.text}
            </button>
        );
    }
}

export default Primary_button;

// const primary_button = (text, callback) => {
//   return (
//     <button className="primary_button" onClick={callback}>
//       {text}
//     </button>
//   );
// };
