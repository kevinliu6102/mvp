import React, { Component } from 'react'
import axios from 'axios'
import Score from './Score'
import TeamView from './TeamView'

class MatchEntry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teams: null
    }
  }
  
  componentDidMount() {
    // 0 is red, 1 is blue
    let teams = this.props.match.fellowPlayers.reduce((tuple, player) => {
      if (player.teamId === 100) {
        tuple[0][player.championId] = player
      } else {
        tuple[1][player.championId] = player
      }
      return tuple
    }, [{}, {}])
    
    if (this.props.match.teamId === 100) {
      teams[0][this.props.match.championId] = { teamId: this.props.match.teamId, championId: this.props.match.championId, summonerName: this.props.user}
    } else {
      teams[1][this.props.match.championId] = { teamId: this.props.match.teamId, championId: this.props.match.championId, summonerName: this.props.user}
    }
    let score = [this.props.match.stats.championsKilled, this.props.match.stats.numDeaths, this.props.match.stats.assists]
    let context = this

    axios.get(`/api/match/${context.props.match.gameId}`)
      .then((res) => {
        res.data.participants.forEach((player) => {
          let playerScore = [player.stats.kills, player.stats.deaths, player.stats.assists]
          if (player.teamId === 100) {
            teams[0][player.championId].score = playerScore
          } else {
            teams[1][player.championId].score = playerScore
          }
        })
        context.setState({ teams })
      })
  }
  

  render() {
    return (
      <li className="row">
        <span className="winloss">{this.props.match.stats.win ? 'VICTORY' : 'DEFEAT'}</span>
        <span>{`${this.props.match.gameMode} - ${this.props.match.subType}`}</span>
        
        {
          (this.state.teams)
          ? <div className="teamsContainer">
              <TeamView matchId={this.props.match.gameId} focusOnMatch={this.props.focusOnMatch} team={this.state.teams[0]} color={'red'}/>
              <TeamView matchId={this.props.match.gameId} focusOnMatch={this.props.focusOnMatch} team={this.state.teams[1]} color={'blue'}/>
            </div>
          : ''
        }
      </li>
    );
  }
}
// <Score score={score}/>
export default MatchEntry


// for whole match, keep track of gameId, fellowPlayers, kda on main player
  // for each player, keep track of championId and summonerName