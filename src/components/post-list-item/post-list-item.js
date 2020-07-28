import React from 'react';
import './post-list-item.css';

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { important: false };
    this.onImportrant = this.onImportrant.bind(this);
  }

  onImportrant()  {
    //this.setState({important: !this.state.important});
    this.setState(({ important }) => ({
        important: !important
    }));
  }

  render() {
    const { label} = this.props;
    const {important} = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    return (
      <li className={classNames}>
        <span className="app-list-item-label">
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
          <i className="fa fa-heart-o"></i>
        </div>
      </li>
    );
  }
}

