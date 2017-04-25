import React from 'react'

const MessageEntry = (props) => {
  // timestamp
  // targetUser
  // username
  // message  
  return (
    <li>
      <span>{props.message.createdAt}</span>
      <span>@{props.message.targetUser.name}</span>
      <span>{props.message.text}</span>
    </li>
  )
}

export default MessageEntry