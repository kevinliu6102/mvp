import React, { Component } from 'react'
import MessageEntry from './MessageEntry'
import axios from 'axios'

class MessageFeed extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
      fetching: false
    }
  }

  componentDidMount() {
    // fetch messages
    let context = this
    axios.get('/message')
      .then((res) => context.setState({ messages: res.data }))
  }

  render() {
    return (
      <ul>
        {this.state.messages.map((message) => <MessageEntry message={message}/>)}
      </ul>
    )
  }
}

export default MessageFeed