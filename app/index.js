let React = require('react');
let ReactDOM = require('react-dom');

import App from './components/App';
require('./index.css');

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('app')
);
