import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/chip"><button>Chips</button></Link>
      <Link to="/soda"><button>Soda</button></Link>
      <Link to="/sardine"><button>Sardines</button></Link>
    </div>

  )
}

export default Nav