import React from 'react'

const Navbar = (props) => {
  return (
    <nav>
      <a href="/"><div>Home</div></a>
      <form onSubmit={props.searchSummoner}>
        <input type="text" name="summoner" placeholder="Enter your IGN..."/>
      </form>
    </nav>
  )
}

export default Navbar