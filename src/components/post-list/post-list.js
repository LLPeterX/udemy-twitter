import React from 'react'
import './post-list.css';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

// const PostList = ({ posts }) => {
//   return (
//     <ul className="app-list list-group">
//       {posts.map((item) => {
//         let { id, ...itemProps } = item;
//         return <PostListItem {...itemProps} key={id} />
//       })}
//     </ul>
//   );
// }

const PostList = ({ posts }) => {
  return (
    <ListGroup className="app-list">
      {posts.map((item) => {
        let { id, ...itemProps } = item;
        return <PostListItem {...itemProps} key={id} />
      })}
    </ListGroup>
  );
}


export default PostList;