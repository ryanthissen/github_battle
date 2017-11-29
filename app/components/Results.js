const React = require('react');
const PropTypes = require('prop-types');
const queryString = require('query-string');
let api = require('../utils/api');
let Link = require('react-router-dom').Link;
let PlayerPreview = require('./PlayerPreview');

function Profile (props) {
  let info = props.info;

  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}


function Player (props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
      <Profile info={props.profile}/>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isReqiured,
  score: PropTypes.number.isReqiured,
  profile: PropTypes.object.isRequired
}
export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    api.battle([players.playerOneName, players.playerTwoName])
      .then(function (results) {
        if (results === null) {
          this.setState(function() {
            return {
              error: "Looks like something went wrong.  Check that both users are on Github.",
              loading: false
            }
          })
        } else {
          this.setState(function() {
            return {
              error: null,
              winner: results[0],
              loser: results[1],
              loading: false
            }
          })
        }
      }.bind(this));
  }
  render() {
    let winner = this.state.winner;
    let loser = this.state.loser;
    let error = this.state.error;
    let loading = this.state.loading;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }
    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}
