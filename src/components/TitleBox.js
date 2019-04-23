import React from 'react'
import { Link } from "react-router-dom"

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styleOverrides = theme => ({
  container: {
    display: 'inline-block'
  },
  title: {
    color: theme.colors.white,
    fontWeight: 500,
    fontSize: '1.6em',
    textTransform: 'uppercase',
    letterSpacing: 2
  }
})

const ServicesBar = ({classes, path, children}) =>  (
  <Link to={path}>
    <div className={classes.container}>
      <Typography
        classes={{root: classes.title}}
        variant="h5"
      > {children}
      </Typography>
    </div>
  </Link>
)

export default withStyles(styleOverrides)(ServicesBar)
