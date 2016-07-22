import React from 'react';
import {mount} from 'react-mounter';

import {FlowRouter} from 'meteor/kadira:flow-router';
import PostList from 'client/modules/core/containers/postlist';

export default function (injectDeps) {
  const PostListCtx = injectDeps(PostList);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(PostListCtx);
    }
  });

}
