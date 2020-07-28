import React from 'react'
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({ posts }) => {
  return (
    <ul className="app-list list-group">
      {posts.map((item) => {
        let { id, ...itemProps } = item;
        return <PostListItem {...itemProps} key={id} />
      })}
    </ul>
  );
}

export default PostList;