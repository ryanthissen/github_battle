let React = require('react');
let Link = require('react-router-dom').Link;


export default class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends...and stuff.</h1>

        <Link className='button' to='/battle'>Battle!</Link>
      </div>
    )
  }
}
