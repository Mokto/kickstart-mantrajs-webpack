import PostList from '../components/postlist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(composer, Loading, Error, { withRef: true }),
  useDeps()
)(PostList);


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