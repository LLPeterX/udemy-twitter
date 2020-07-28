import React from 'react'
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
  let key=1;
  return (
    <ul className="app-list list-group">
      {/* { posts.map((item) => <PostListItem label={item.label} important={item.important} key={key++}/>) } */}
      { posts.map((item) => <PostListItem {...item} key={key++}/>) }
    </ul>
  );
}

export default PostList;