import React from 'react'

class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postText: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({postText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddPost(this.state.postText);
    this.setState({postText:''});
  }

  render() {
    return(
      <form className="bottom-panel d-flex" onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label" 
        value ={this.state.postText}
        onChange={this.onChange}
        autoFocus
        />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        >Добавить</button>
    </form>
    );
  }
}


export default PostAddForm;