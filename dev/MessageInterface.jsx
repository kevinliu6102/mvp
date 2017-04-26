import React from 'react'
import Score from './Score'

const MessageInterface = (props) => {
  let score = props.targetData.score
  let targetName = props.targetData.targetName
  return (
    <div>
      <div>
        <a href="#" onClick={props.unfocus}>Go back</a>
      </div>
      <span>{`${targetName}'s Score was `}</span>
      <Score score={score} highlight={true}/>
      <form onSubmit={(e) => props.sendMessage(e, targetName, score.join(','))}>
        <input type="text"/>
      </form>
    </div>
  )
}

export default MessageInterface