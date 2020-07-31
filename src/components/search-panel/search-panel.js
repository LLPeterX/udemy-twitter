import React from 'react'
import './search-panel.css'

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('panel text: set ',e.target.value,'state:',this.state.searchText);
    this.setState({searchText: e.target.value});
    this.props.onSearch(this.state.searchText);
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по сообщениям"
        onChange = {this.onChange}
        value={this.state.searchText}
      />
    );
  }
};

export default SearchPanel;