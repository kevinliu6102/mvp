import React, { Component } from 'react'
import axios from 'axios'
import MessageFeed from './MessageFeed'
import MatchHistory from './MatchHistory'
import Navbar from './Navbar'

class App extends Component {
  constructor() {
    super()

    this.state = {
      searching: false,
      messages: [],
      matches: [],
      user: null
    }

    this.searchSummoner = this.searchSummoner.bind(this)
  }

// shows matchhistory
  searchSummoner(event) {
    event.preventDefault()
    event.stopPropagation()
    const app = this
    let user = event.target.children[1].value
    axios.get(`/api/summoner/${user}`)
      .then((res) => app.setState({
        searching: true,
        user: user,
        matches: res.data
      }) )
      .catch((e) => console.log('error getting match history', e))
  }

  render() {
    return (
      <div>
        <Navbar searchSummoner={this.searchSummoner}/>
          <div id="body">
            {
              (this.state.searching)
              ? <MatchHistory user={this.state.user} matches={this.state.matches}/>
              : <MessageFeed messages={this.state.messages}/>
            }
          </div>
      </div>
    )
  }
}

export default App