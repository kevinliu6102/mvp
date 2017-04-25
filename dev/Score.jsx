import React from 'react'

const Score = (props) => {
  return (
    <div className="score">
      <span className="kills">{props.score[0]}</span>
      /
      <span className="deaths">{props.score[1]}</span>
      /
      <span className="assists">{props.score[2]}</span>
    </div>
  )
}

export default Score
