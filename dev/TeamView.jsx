import React from 'react'
import _ from 'lodash'
import TeamViewEntry from './TeamViewEntry'

const TeamView = (props) => {
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
