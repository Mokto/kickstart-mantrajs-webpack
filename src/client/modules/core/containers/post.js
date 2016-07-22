import Post from '../components/post.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('posts.single', postId, () => {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const postFromCache = Tracker.nonreactive(() => {
    return Collections.Posts.findOne(postId);
  });

  if (postFromCache) {
    onData(null, {post: postFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer, Loading, Error, { withRef: true }),
  useDeps()
)(Post);



import React from 'react';
class Loading extends React.Component {
  render() {
    return null;
  }
}
class Error extends React.Component {
  render() {
    return null;
  }
}