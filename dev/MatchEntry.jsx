import React, { Component } from 'react'
import axios from 'axios'
import Score from './Score'
import TeamView from './TeamView'

// const MatchEntry = (props) => {
//   let red = props.match.fellowPlayers.filter((player) => player.teamId === 100)
//   let blue = props.match.fellowPlayers.filter((player) => player.teamId === 200)
//   if (props.match.teamId === 100) {
//     red.push({ teamId: props.match.teamId, championId: props.match.championId, summonerName: props.user})
//   } else {
//     blue.push({ teamId: props.match.teamId, championId: props.match.championId, summonerName: props.user})
//   }
//   let score = [props.match.stats.championsKilled, props.match.stats.numDeaths, props.match.stats.assists]

//   return (
//     <li>
//       <span>{props.match.stats.win ? 'VICTORY' : 'DEFEAT'}</span>
//       <span>{`${props.match.gameMode} - ${props.match.subType}`}</span>
//       <Score score={score}/>
//       <div className="teamsContainer">
//         <TeamView matchId={props.match.gameId} focusOnMatch={props.focusOnMatch} team={red} color={'red'}/>
//         <TeamView matchId={props.match.gameId} focusOnMatch={props.focusOnMatch} team={blue} color={'blue'}/>
//       </div>
//     </li>
//   )
// }

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
      console.log('in reduce')
      if (player.teamId === 100) {
        tuple[0][player.championId] = player
      } else {
        tuple[1][player.championId] = player
      }
      return tuple
    }, [{}, {}])
    console.log(teams)
    if (this.props.match.teamId === 100) {
      teams[0][this.props.match.championId] = { teamId: this.props.match.teamId, championId: this.props.match.championId, summonerName: this.props.user}
    } else {
      teams[1][this.props.match.championId] = { teamId: this.props.match.teamId, championId: this.props.match.championId, summonerName: this.props.user}
    }
    let score = [this.props.match.stats.championsKilled, this.props.match.stats.numDeaths, this.props.match.stats.assists]
    let context = this
    context.setState({ teams })

    // axios.get(`/api/match/${context.props.gameId}`)
    //   .then((res) => {
    //     res.participants.forEach((player) => {
    //       if (player.teamId === 100) {
            
    //       } else {

    //       }
    //     })
    //   })
  }
  

  render() {
    // console.log(this.state)
    return (
      <li>
        <span>{this.props.match.stats.win ? 'VICTORY' : 'DEFEAT'}</span>
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