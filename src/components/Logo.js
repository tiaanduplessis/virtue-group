import React, { Fragment } from 'react'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import { withTheme } from '@material-ui/core/styles'

const Logo = ({ location, size, compact, theme }) => {

  const LogoLink = props => <RouterLink to="/home" {...props} />

  return (
    <Link to="/" component={LogoLink}  className="logo">
      {!compact && <div className="logo-top">the</div>}

      <div className="logo-center">
        <span>Virtue</span>
        <span>Group</span>
      </div>

      {!compact && (
        <Fragment>
          <span className="hr" />
          <div className="logo-bottom">of companies</div>
        </Fragment>
      )}

      <style global jsx>{`
        .logo {
          display: flex;
          flex-direction: column;
          pointer-events: ${location.pathname === '/home' ? 'none' : 'auto'};
        }
        .logo:hover {
          text-decoration: none;
        }
        .logo-top {
          transform: translateY(.6em);
          font-size: ${size/3}em;
          color: grey;
        }
        .logo-center {
          display: flex;
          font-size: ${size}em;
        }
        .logo-center span:first-of-type {
          color: ${theme.palette.secondary.main};
          text-transform: uppercase;
          font-size: inherit;
          font-weight: 600;
        }
        .logo-center span:last-of-type {
          color: ${theme.colors.white};
          text-transform: lowercase;
          font-size: inherit;
          transform: translateY(-.17em);
        }
        .hr {
          border: 0;
          height: 1px;
          background: grey;
          background-image: linear-gradient(to right, #ccc, grey}, #ccc);
        }
        .logo-bottom {
          align-self: flex-end;
          color: ${theme.palette.secondary.main};
          font-size: ${size/3}em;
        }
      `}</style>
    </Link>
  )
}



Logo.defaultProps = {
  size: 2,
  compact: false
}

export default withRouter(withTheme()(Logo))
