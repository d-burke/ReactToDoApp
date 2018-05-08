import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        let blogs = this.props.blogs;
        return (
            <div>
                <h4>Your Blog Posts</h4>
                {blogs &&
                    blogs.map((blog, i) => {
                        return (
                            <div key={'blog' + i}>
                                <span>{blog.title}: </span>
                                <span>{blog.body.slice(0, 14)}...</span>
                            </div>
                        );
                    })}
            </div>
        );
    }
}

export default HomePage;
