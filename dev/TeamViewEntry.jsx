import React from 'react'
import Score from './Score'

const TeamViewEntry = (props) => {
  let cbArgs = [props.player.summonerName, props.player.championId, props.player.teamId, props.matchId]
  return (
    <div>
      <span onClick={() => props.focusOnMatch(...cbArgs)}>{props.player.summonerName}</span>
      <Score score={props.player.score}/>
    </div>
  )
}

export default TeamViewEntry
