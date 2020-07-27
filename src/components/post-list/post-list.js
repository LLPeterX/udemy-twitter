import React from 'react'
import PostListTtem from '../post-list-item'
import './post-list.css';

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListTtem />
      <PostListTtem />
      <PostListTtem />
    </ul>

  );
}

export default PostList;