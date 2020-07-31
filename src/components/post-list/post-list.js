import React from 'react'
import './post-list.css';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  return (
    <ListGroup className="app-list">
      {posts.map((item) => {
        return <PostListItem
          {...item}
          key={item.id}
          onDelete={(id) => onDelete(id)}
          onToggleImportant={(id) => onToggleImportant(id)}
          onToggleLiked={(id) => onToggleLiked(id)}
        />
      })}
    </ListGroup>
  );
}


export default PostList;