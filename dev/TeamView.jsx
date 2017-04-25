import React from 'react'
import TeamViewEntry from './TeamViewEntry'

const TeamView = (props) => {
  return (
    <div className={props.color}>
      {props.team.map((player) => <TeamViewEntry player={player} focusOnMatch={props.focusOnMatch} matchId={props.matchId}/>)}
    </div>
  )
}

export default TeamView
