import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ContactLink from './contact-link'

import { Toolbar } from '@material-ui/core'

const styleOverrides = theme => ({
  footer: {
    height: 70,
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    marginTop: 36,
    ...theme.container
  },
  toolbar: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  }
})

const Footer = ({classes}) => (
  <footer className={classes.footer}>
    <Toolbar classes={{root: classes.toolbar}}>
        <ContactLink
          variant="email"
          color="secondary"
        />
        <ContactLink
          variant="phone"
          color="secondary"
          style={{marginLeft: 36}}
        />
    </Toolbar>
  </footer>
)

export default withStyles(styleOverrides)(Footer)
