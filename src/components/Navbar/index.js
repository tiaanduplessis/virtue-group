import React from 'react'
import { NavLink } from "react-router-dom"

import './navbar.css'

import { navData } from '../../utils/data'
import colors from '../../utils/colors'

const styles = {
  'navbar': {
    display: 'flex'
  },
  'nav-link' : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.1em',
    minWidth: '8em',
    height: '3em',
  },
  'nav-link:hover' : {
    border: '5px solid grey'
  }
}



const Navbar = ({active}) => {

  return <ul className="navbar">
    { navData.map(item => {
      return <li key={item.id} classNa>
        <NavLink to={item.path} className="nav-link" activeClassName="selected">{item.name}</NavLink>
      </li>
    }) }
  </ul>
}

export default Navbar
