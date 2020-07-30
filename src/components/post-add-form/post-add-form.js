import React from 'react'

const PostAddForm = ({onAddPost}) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label" />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={()=> onAddPost("hello")}
        >Добавить</button>
    </div>
  );
}

export default PostAddForm;