import React, { Component } from 'react';
// CSS
import './App.css';
// Initial Data
import initialBlogsData from './blogData';
// Components
import HeaderNav from './HeaderNav';
import BlogBody from './BlogBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: initialBlogsData,
      viewPage: 'Home'
    };
  }

  navClick = pageName => {
    this.setState({ viewPage: pageName });
  };

  addNewBlog = () => {
    let blogTitle = document.getElementById('blogTitleInput').value;
    let blogText = document.getElementById('blogTextInput').value;
    this.setState({
      blogs: this.state.blogs.concat({
        title: blogTitle,
        body: blogText
      }),
      viewPage: 'Home'
    });
  };

  render() {
    return (
      <div className="App">
        <HeaderNav navClick={this.navClick} />
        <hr />
        <BlogBody
          viewPage={this.state.viewPage}
          blogs={this.state.blogs}
          addNewBlog={this.addNewBlog}
        />
        <hr />
      </div>
    );
  }
}

export default App;
