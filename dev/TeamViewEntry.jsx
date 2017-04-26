import React from 'react'
import Score from './Score'

const TeamViewEntry = (props) => {
  let cbArgs = [props.player.score, props.player.summonerName]
  return (
    <div>
      <span onClick={() => props.focusOnMatch(...cbArgs)}>{props.player.summonerName}</span>
      <Score score={props.player.score} highlight={false}/>
    </div>
  )
}

export default TeamViewEntry
