import React from 'react'
import { Link } from 'react-router-dom'
import './style/home.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
    <div id="logo">Audix</div>
      </Link>
    <ul>
      <li>Categories</li>
      <li>New Releases</li>
      <li>Best sellers</li>
      <li>Offers</li>
    </ul>
  </nav>
  )
}

export default Navbar