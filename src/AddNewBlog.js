import React, { Component } from 'react';
import PrimaryInput from './PrimaryInput';
import PrimaryButton from './PrimaryButton';

class renderAddNewBlog extends Component {
    render() {
        return (
            <div>
                <h4>Add New Blog</h4>
                <div>Title:</div>
                <div>
                    <PrimaryInput id="blogTitleInput" defaultValue="Title" />
                </div>
                <div>Blog Text:</div>
                <div>
                    <PrimaryInput id="blogTextInput" defaultValue="blog text" />
                </div>
                <PrimaryButton
                    text="Add new Blog"
                    callback={this.props.addNewBlog}
                />
            </div>
        );
    }
}

export default renderAddNewBlog;
