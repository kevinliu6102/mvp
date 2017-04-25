import React from 'react'
import Score from './Score'

const MessageInterface = (props) => {
  let score = [props.targetData.stats.kills, props.targetData.stats.deaths, props.targetData.stats.assists]
  let targetName = props.targetData.summonerName
  return (
    <div>
      <span>{`${targetName}'s Score was `}</span>
      <Score score={score}/>
      <form onSubmit={(e) => props.sendMessage(e, targetName)}>
        <input type="text"/>
      </form>
    </div>
  )
}

export default MessageInterface