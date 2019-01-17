import React from 'react'
import { Link } from "react-router-dom"

import colors from '../utils/colors'

const Logo = ({size}) => <Link to="/" className="logo">

  <span>Virtue</span>
  <span>Group</span>

  <style global jsx>{`
      .logo {
        display: flex;
        font-size: ${size}em;
        font-weight: 400;
      }
      .logo span:first-of-type {
        color: ${colors.red};
        text-transform: uppercase;
        font-size: inherit;
        font-weight: 600;
      }
      .logo span:last-of-type {
        color: ${colors.black};
        text-transform: lowercase;
        font-size: inherit;
        transform: translateY(-.18em)
      }
  `}</style>
</Link>


Logo.defaultProps = { size: 2.5 }





export default Logo
