import React from 'react';
import {Button} from 'reactstrap'

// const PostStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button" className="btn btn-info">Все</button>
//       <button type="button" className="btn btn-outline-secondary">Понравилось</button>
//     </div>
//   );
// }

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button outline color="primary">Все</Button>
      <Button outline color="secondary">Понравилось</Button>
    </div>
  );
}

export default PostStatusFilter;