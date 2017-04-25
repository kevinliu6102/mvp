import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
      <form onSubmit={props.searchSummoner}>
        <a href="/">Home</a>
        <input type="text" name="summoner" placeholder="Search a summoner..."/>
      </form>
    </nav>
  )
}

export default Navbar