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
    this.sendMessage = this.sendMessage.bind(this)
  }

// shows matchhistory
  searchSummoner(event) {
    event.preventDefault()
    event.stopPropagation()
    let app = this
    let user = event.target.children[1].value
    axios.get(`/api/summoner/${user}`)
      .then((res) => app.setState({
        searching: true,
        user: user,
        matches: res.data
      }) )
      .catch((e) => console.log('error getting match history', e))
  }

  sendMessage(event, targetName, score) {
    event.preventDefault()
    event.stopPropagation()

    let app = this
    
    axios.post('/message', {
        score: score,
        targetUser: targetName,
        text: event.target.children[0].value
      })
      .then((res) => {
        app.setState({
          messages: this.state.messages.concat(res.data.model),
          searching: false
        })
      })
    
  }

  render() {
    return (
      <div>
        <Navbar searchSummoner={this.searchSummoner}/>
          <div id="body">
            {
              (this.state.searching)
              ? <MatchHistory sendMessage={this.sendMessage} user={this.state.user} matches={this.state.matches}/>
              : <MessageFeed messages={this.state.messages}/>
            }
          </div>
      </div>
    )
  }
}

export default App