import React, { Component } from 'react';
import HomePage from './HomePage';
import AddNewBlog from './AddNewBlog';
import About from './About';

class BlogBody extends Component {
    render() {
        if (this.props.viewPage === 'Home') {
            return <HomePage blogs={this.props.blogs} />;
        } else if (this.props.viewPage === 'Add New Blog') {
            return <AddNewBlog addNewBlog={this.props.addNewBlog} />;
        } else if (this.props.viewPage === 'About') {
            return <About />;
        } else {
            return (
                <div>
                    <div>-- Page Not Found --</div>
                </div>
            );
        }
    }
}

export default BlogBody;
