import React from 'react'
import Score from './Score'
import TeamView from './TeamView'

const MatchEntry = (props) => {
  let red = props.match.fellowPlayers.filter((player) => player.teamId === 100)
  let blue = props.match.fellowPlayers.filter((player) => player.teamId === 200)
  if (props.match.teamId === 100) {
    red.push({ teamId: props.match.teamId, championId: props.match.championId, summonerName: props.user})
  } else {
    blue.push({ teamId: props.match.teamId, championId: props.match.championId, summonerName: props.user})
  }
  let score = [props.match.stats.championsKilled, props.match.stats.numDeaths, props.match.stats.assists]
  return (
    <li>
      <span>{props.match.stats.win ? 'VICTORY' : 'DEFEAT'}</span>
      <span>{`${props.match.gameMode} - ${props.match.subType}`}</span>
      <Score score={score}/>
      <TeamView matchId={props.match.gameId} focusOnMatch={props.focusOnMatch} team={red} color={'red'}/>
      <TeamView matchId={props.match.gameId} focusOnMatch={props.focusOnMatch} team={blue} color={'blue'}/>
    </li>
  )
}

export default MatchEntry


// for whole match, keep track of gameId, fellowPlayers, kda on main player
  // for each player, keep track of championId and summonerName