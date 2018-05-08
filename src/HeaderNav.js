import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
        return (
            <div>
                <h2 className="title">React Blog</h2>
                <div className="headerNavLinks">
                    <span
                        className="headerNavLink"
                        onClick={() => {
                            this.props.navClick('Home');
                        }}
                    >
                        Home
                    </span>
                    <span
                        className="headerNavLink"
                        onClick={() => {
                            this.props.navClick('Add New Blog');
                        }}
                    >
                        Add New Blog
                    </span>
                    <span
                        className="headerNavLink"
                        onClick={() => {
                            this.props.navClick('About');
                        }}
                    >
                        About
                    </span>
                </div>
            </div>
        );
    }
}

export default HeaderNav;
