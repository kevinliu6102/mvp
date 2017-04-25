import React from 'react'
import Score from './Score'

const MessageInterface = (props) => {
  let score = [props.targetData.stats.kills, props.targetData.stats.deaths, props.targetData.stats.assists]
  return (
    <div>
      <span>{`${props.targetData.summonerName}'s Score was `}</span>
      <Score score={score}/>
      <form>
        <input type="text"/>
      </form>
    </div>
  )
}

export default MessageInterface