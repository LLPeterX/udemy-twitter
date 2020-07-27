import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

//let counter = 0;

// function WhoIAm(props) {
//   counter++;
//   return (
//     <>
//       <h1>{counter}) My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My Profile</a>
//     </>
//   );
// }

class WhoIAm extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 1; // собственное состояние
  }
  render() {
    this.counter++;
    return (
      <>
        <h1>{this.counter}) My name is {this.props.name}, surname - {this.props.surname}</h1>
        <a href={this.props.link}>My Profile</a>
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