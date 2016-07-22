import React from 'react';

import Post from '../containers/post';

export default class PostList extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className='postlist'>
        <button onClick={()=>{
          console.log(this.refs);
          console.log(this.refs["post"+posts[0]._id]);
        }}>GET REF</button>

        
        <ul>
          {posts.map(post => (
            <Post ref={"post"+post._id} key={post._id} postId={post._id} />
          ))}
        </ul>
      </div>
    )
  }
}
