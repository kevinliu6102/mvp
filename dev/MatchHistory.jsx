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
    this.unfocus = this.unfocus.bind(this)
  }

  unfocus(event) {
    event.preventDefault()
    event.stopPropagation()
    this.setState({ focusMatch: null })
  }

  focusOnMatch(score, targetName) {
    this.setState({ focusMatch: { score, targetName } })
  }

  render() {
    return (
      <div>
        {
          (this.state.focusMatch)
          ? <MessageInterface sendMessage={this.props.sendMessage} targetData={this.state.focusMatch} unfocus={this.unfocus}/>
          : <ul>
              {this.state.matches.map((match) => <MatchEntry user={this.props.user} focusOnMatch={this.focusOnMatch} match={match}/>)}
            </ul>
        }
      </div>
    )
  }
}

export default MatchHistory