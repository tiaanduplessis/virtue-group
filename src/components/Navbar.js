import React from 'react'
import { NavLink } from "react-router-dom"

import colors from '../utils/colors'
import { navData } from '../utils/data'

const Navbar = () => {

  return <ul className="navbar">
    { navData.map(item => {
      return <li key={item.id} className="nav-link">
        <NavLink to={item.path}>
          {item.name}
        </NavLink>
      </li>
    }) }
    <style jsx>{`
      .navbar {
        display: flex;
      }
      .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1em;
        min-width: 8em;
        height: 3em;
      }
      .nav-link:hover {
        border: 5px solid ${colors.primary};
      }
    `}</style>
  </ul>
}

export default Navbar
