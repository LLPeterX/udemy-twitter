import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// class WhoIAm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { years: 55 };
//     this.counter = 1;
//   }
//   nextYear = () => {
//     this.setState(function (state) {
//       console.log('setting state:', this.state);
//       return ({ years: ++state.years });
//     });
//   }

//   render() {
//     console.log('Render:', this.state);
//     return (
//       <>
//         <h1>{this.counter++}) My name is {this.props.name},
//           surname - {this.props.surname}, years {this.state.years}</h1>
//         <a href={this.props.link}>My Profile</a>
//         <button onClick={this.nextYear}>+</button>
//       </>
//     );
//   }
// }

// function All() {
//   return (
//     <>
//       <WhoIAm name="Вася" surname="Иванов" link="https://www.google.ru" />
//       <WhoIAm name="Петр" surname="Лебедев" link="https://vk.com" />
//     </>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <All /> */}
  </React.StrictMode>,
  document.getElementById('root')
);