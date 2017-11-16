const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

const Nav = require('./Nav');
import Badge from './Badge';
import Popular from './Popular';


export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>

      </Router>
    )
  }
}

// Badge.propTypes = {
//   name: PropTypes.string.isRequired,
//   img:PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired
// }


{/* <Badge
  name={'Black Kettle'}
  username={'blackkettle22'}
  img={'https://i.pinimg.com/originals/04/1d/de/041ddee2d7d9ab458b1c04e0cf76e633.jpg'}
/> */}
