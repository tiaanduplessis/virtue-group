import React from 'react'
import { NavLink, withRouter } from "react-router-dom"

import colors from '../utils/colors'
import { navData, linkSize, findActiveLink } from '../utils/data'

const Navbar = ({location}) => {
  const id = findActiveLink(location.pathname) ? findActiveLink(location.pathname).id : 0
  const {width, height, margin, scoreWidth, scoreThickness} = linkSize
  const scorePosition = id * (width + 2*margin) + width/2 + margin - scoreWidth/2

  return <ul className="navbar">
    <div className="navbar-score" />
    { navData.map(item => {
      return <li key={item.id} className="navbar-link">
        <NavLink to={item.path}>
          {item.name}
        </NavLink>
      </li>
    })}
    <style global jsx>{`
      .navbar {
        display: flex;
        position: relative;
      }
      .navbar-link {
        width: ${width}em;
        height: ${height}em;
        margin: ${margin}em;
        transition: 50ms ease-in-out;
      }
      .navbar-link:hover {
        border: ${scoreThickness}em solid ${colors.primary};
      }
      .navbar-link a {
        font-size: 1.1em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .navbar-score {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translate(${scorePosition}em, -${margin}em);
        transition: transform 500ms ease-in-out;
        height: ${scoreThickness}em;
        width: ${scoreWidth}em;
        background-color: ${colors.primary};
        bottom: 0px;
      }
    `}</style>
  </ul>
}

export default withRouter(Navbar)
