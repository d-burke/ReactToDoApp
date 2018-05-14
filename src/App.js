import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// CSS
import './App.css';
// Initial Data
import initialBlogsData from './blogData';
// Components
import HomePage from './HomePage';
import AddNewBlog from './AddNewBlog';
import About from './About';
import HeaderNav from './HeaderNav';
import BlogBody from './BlogBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: initialBlogsData
    };
  }

  addNewBlog = ({ history }) => {
    let blogTitle = document.getElementById('blogTitleInput').value;
    let blogText = document.getElementById('blogTextInput').value;
    this.setState({
      blogs: this.state.blogs.concat({
        title: blogTitle,
        body: blogText
      })
    });

    history.push('/');
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNav />

          <hr />

          <BlogBody>
            <Switch>
              <Route exact path={'/'} render={routerProps => (<HomePage blogs={this.state.blogs} {...routerProps} />) } />
              <Route path={'/add-new-blog'} render={routerProps => (<AddNewBlog addNewBlog={() => this.addNewBlog(routerProps)} {...routerProps} />) }/>
              <Route path={'/about'} component={About} />
              <Route render={() => (
                <div>
                  <div>-- Page Not Found --</div>
                </div>
              )} />
            </Switch>
          </BlogBody>

          <hr />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
