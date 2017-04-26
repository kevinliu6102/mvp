import React from 'react'
import Score from './Score'

const MessageEntry = (props) => {
  return (
    <li className="row">
      <div className="top">
        <span className="sender">{props.message.sender.name}</span>
        <span>{props.message.createdAt}</span>
      </div>
      <span>@{props.message.targetUser.name}</span>
      <Score score={props.message.score.split(',')} highlight={true}/>
      <span>{props.message.text}</span>
    </li>
  )
}

export default MessageEntry