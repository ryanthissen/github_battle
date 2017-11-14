let React = require('react');
let ReactDOM = require('react-dom');
let PropTypes = require('prop-types');


import Badge from './badge.js';
require('./index.css');

class App extends React.Component {
  render() {
    return(
      <div>
        Hello React World!
      </div>
    )
  }
}

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <div>
    <App />
    <Badge
      name={'Black Kettle'}
      username={'blackkettle22'}
      img={'https://i.pinimg.com/originals/04/1d/de/041ddee2d7d9ab458b1c04e0cf76e633.jpg'}
    />
  </div>
  ,
  document.getElementById('app')
);
