let React = require('react');
let ReactDOM = require('react-dom');

export default class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="avatar" style={{width: 100, height: 100}}/>
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}



// ReactDOM.render(
//   <Badge
//     name='Black Kettle',
//     username='blackkettle22'
//     img='https://en.wikipedia.org/wiki/Black_Kettle#/media/File:Chief_Black_Kettle.jpg'
//   />,
//   document.getElementById('root')
// );
