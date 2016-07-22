import React from 'react';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        {post.saving ? <p>Saving...</p> : null}
        <h2>{post.title}</h2>
        <p>
          {post.content}
        </p>
      </div>
    )
  }
}
