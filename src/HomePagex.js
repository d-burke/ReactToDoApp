import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
        return (
            <div>
                <h3 className="title">React Blog</h3>
                <div className="headerNavLinks">
                    <span>
                        <a href="">Home </a>
                    </span>
                    <span>
                        <a href="">Blogs </a>
                    </span>
                    <span>
                        <a href="">About </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default HeaderNav;

// const primary_button = (text, callback) => {
//   return (
//     <button className="primary_button" onClick={callback}>
//       {text}
//     </button>
//   );
// };
