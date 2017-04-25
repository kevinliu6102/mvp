import React from 'react'

const TeamViewEntry = (props) => {
  let cbArgs = [props.player.summonerName, props.player.championId, props.player.teamId, props.matchId]
  return (
    <div>
      <span onClick={() => props.focusOnMatch(...cbArgs)}>{props.player.summonerName}</span>
    </div>
  )
}

export default TeamViewEntry
