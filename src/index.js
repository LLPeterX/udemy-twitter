import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/app/';

class WhoIAm extends React.Component {
  state = { years: 55 };
  nextYear = () => {
    this.setState(state => ({ years: state.years++}));
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>{this.counter}) My name is {this.props.name},
          surname - {this.props.surname}, years {this.state.years}</h1>
        <a href={this.props.link}>My Profile</a>
        <button onClick={this.nextYear}>+</button>
      </>
    );
  }
}

function All() {
  return (
    <>
      <WhoIAm name="Вася" surname="Иванов" link="https://www.google.ru" />
      <WhoIAm name="Петр" surname="Лебедев" link="https://vk.com" />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <All />
  </React.StrictMode>,
  document.getElementById('root')
);