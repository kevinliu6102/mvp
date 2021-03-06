import React, { Component } from 'react'
import MessageEntry from './MessageEntry'
import axios from 'axios'

class MessageFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: props.messages,
      fetching: false
    }
  }

  componentDidMount() {
    // fetch messages
    let context = this
    axios.get('/message')
      .then((res) => context.setState({ messages: res.data.reverse() }))
      .catch((e) => console.log('error fetching messages', e))
  }

  render() {
    return (
      <ul>
        {
          (this.state.messages)
          ? this.state.messages.map((message) => <MessageEntry message={message}/>)
          : ''
        }
      </ul>
    )
  }
}

export default MessageFeed