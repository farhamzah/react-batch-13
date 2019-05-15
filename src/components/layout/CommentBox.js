import React, { Component } from 'react';

import CommentList from "./CommentList";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    render() {
        return (
        <form className="form-container border p-2">
         <Comment />
         <CommentForm />
         <Comment />
         <CommentForm />
        </form>
        )
    }
}

export default CommentBox;