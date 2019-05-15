import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
      <div className="form-group">
        <h1>Comments</h1>
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentList;
