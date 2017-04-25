import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
      <form onSubmit={props.searchSummoner}>
        <input type="text" name="summoner" placeholder="Search a summoner..."/>
      </form>
    </nav>
  )
}

export default Navbar