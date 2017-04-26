import React from 'react'

const Score = (props) => {
  let classes = props.highlight ? ['kills', 'deaths', 'assists'] : ['', '', '']
  return (
    <div className="score">
      <span className={classes[0]}>{props.score[0]}</span>
      /
      <span className={classes[1]}>{props.score[1]}</span>
      /
      <span className={classes[2]}>{props.score[2]}</span>
    </div>
  )
}

export default Score
