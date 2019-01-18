import React from 'react'
import { Link } from "react-router-dom"

import colors from '../utils/colors'

const Logo = ({ size, compact }) => <Link to="/" className="logo">
  {!compact && <div className="logo-top">the</div>}
  <div className="logo-center">
    <span>Virtue</span>
    <span>Group</span>
  </div>
  <span className="hr" />
  {!compact && <div className="logo-bottom">of companies</div>}

  <style global jsx>{`
      .logo {
        display: flex;
        flex-direction: column;
        font-weight: 400;
      }
      .logo-top {
        transform: translateY(.6em);
        font-size: ${size/3}em;
        color: ${colors.grey};
      }
      .logo-center {
        display: flex;
        font-size: ${size}em;
      }
      .logo-center span:first-of-type {
        color: ${colors.red};
        text-transform: uppercase;
        font-size: inherit;
        font-weight: 600;
      }
      .logo-center span:last-of-type {
        color: ${colors.black};
        text-transform: lowercase;
        font-size: inherit;
        transform: translateY(-.18em);
      }
      .hr {
        border: 0;
        height: 1px;
        background: ${colors.grey};
        background-image: linear-gradient(to right, #ccc, ${colors.grey}, #ccc);
      }
      .logo-bottom {
        align-self: flex-end;
        color: ${colors.red};
        font-size: ${size/3}em;
      }
  `}</style>
</Link>


Logo.defaultProps = {
  size: 2 ,
  compact: false
}

export default Logo
