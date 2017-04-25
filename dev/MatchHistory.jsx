import React, { Component } from 'react'
import axios from 'axios'
import MessageInterface from './MessageInterface'
import MatchEntry from './MatchEntry'

class MatchHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      matches: props.matches,
      focusMatch: null
    }
    this.focusOnMatch = this.focusOnMatch.bind(this);
  }

  focusOnMatch(targetName, championId, teamId, matchId) {
    let context = this
    axios.get(`/api/match/${matchId}`)
      .then((res) => {
        let target = res.data.participants.filter((player) => player.championId === championId && player.teamId === teamId)[0]
        target.summonerName = targetName
        context.setState({ focusMatch: target })
      })
      .catch((e) => console.log('error fetching specific match', e))
  }

  render() {
    return (
      <div>
        {
          (this.state.focusMatch)
          ? <MessageInterface sendMessage={this.props.sendMessage} targetData={this.state.focusMatch}/>
          : <ul>
              {this.state.matches.map((match) => <MatchEntry user={this.props.user} focusOnMatch={this.focusOnMatch} match={match}/>)}
            </ul>
        }
      </div>
    )
  }
}

export default MatchHistory