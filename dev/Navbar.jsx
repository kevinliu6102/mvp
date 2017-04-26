import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
      <div className="wrapper"><a href="/">LoL Critic</a></div>
      <form onSubmit={props.searchSummoner}>
        <input type="text" name="summoner" placeholder="Enter your IGN..."/>
      </form>
    </nav>
  )
}

export default Navbar