import React from 'react'
import Score from './Score'

const MessageEntry = (props) => {
  // timestamp
  // targetUser
  // username
  // message  
  return (
    <li>
      <span>{props.message.createdAt}</span>
      <span>@{props.message.targetUser.name}</span>
      <Score score={props.message.score.split(',')}/>
      <span>{props.message.text}</span>
    </li>
  )
}

export default MessageEntry