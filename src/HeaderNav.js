import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
  render() {
    return (
      <div>
        <h2 className="title">React Blog</h2>
        <div className="headerNavLinks">
          <Link to={'/'}>
            <span className="headerNavLink">
              Home
            </span>
          </Link>
          <Link to={'/add-new-blog'}>
            <span className="headerNavLink">
              Add New Blog
            </span>
          </Link>
          <Link to={'/about'}>
            <span className="headerNavLink">
              About
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
