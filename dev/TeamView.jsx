import React from 'react'
import _ from 'lodash'
import TeamViewEntry from './TeamViewEntry'

const TeamView = (props) => {
  console.log(props.team)
  return (
    <div className={props.color}>
      {
        (props.team) 
          ? _.map(props.team, (player) => <TeamViewEntry player={player} focusOnMatch={props.focusOnMatch} matchId={props.matchId}/>)
          : ''
      }
    </div>
  )
}

export default TeamView
