import React from 'react';
import './post-list-item.css';

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: this.props.important,
      like: false
    };
    this.onImportrant = this.onImportrant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportrant() {
    this.setState({ important: !this.state.important }); // тоже работает
    // this.setState(({ important }) => ({
    //     important: !important
    // }));
  }
  onLike() {
    this.setState({ like: !this.state.like }); // тоже работает
    // console.log('change like from',this.state.like);
    // this.setState(({ like }) => ({ // like from prevState
    //     like: !this.state.like
    // }));
  }
  

  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if(like) {
      classNames+=" like";
    }
    return (
      <li className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex ustify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportrant}>
            <i className="fa fa-star"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
  }
}

