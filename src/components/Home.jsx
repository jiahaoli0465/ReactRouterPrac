import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to the Vending Machine</h1>
        <h2>What would you like to eat or drink?</h2>

        <button><Link to="/chip">Chips</Link></button>
        <button><Link to="/soda">Soda</Link></button>
        <button><Link to="/sardine">Sardines</Link></button>


    </div>
  )
}

export default Home