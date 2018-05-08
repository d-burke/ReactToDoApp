import React, { Component } from 'react';

class Primary_input extends Component {
    render() {
        return (
            <input
                id={this.props.id}
                className="primary_input"
                defaultValue={this.props.defaultVal}
            />
        );
    }
}

export default Primary_input;

// import React from 'react';

// const primary_input = (id, defaultVal = '') => {
//     return (
//         <input id={id} className="primary_input" defaultValue={defaultVal} />
//     );
// };

// export default primary_input;
