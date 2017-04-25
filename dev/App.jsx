import React, { Component } from 'react'
import MessageFeed from './MessageFeed'
import MatchHistory from './MatchHistory'
import Navbar from './Navbar'

class App extends Component {
  constructor() {
    super()

    this.state = {
      searching: false,
      target: null
    }

    this.searchSummoner = this.searchSummoner.bind(this)
  }

  searchSummoner(event) {
    event.preventDefault()
    event.stopPropagation()
    console.log(event.target.children[0].value)
  }

  render() {
    return (
      <div>
        <Navbar searchSummoner={this.searchSummoner}/>
        {
          (this.state.searching)
          ? <MatchHistory />
          : <MessageFeed />
        }
      </div>
    )
  }
}

export default App