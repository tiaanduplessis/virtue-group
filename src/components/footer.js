import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ContactLink from './contact-link'

import { Toolbar } from '@material-ui/core'

const styleOverrides = theme => ({
  footer: {
    position: 'fixed',
    bottom: 0
  },
  toolbar: {
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.dark,
    color: theme.colors.white,
    width: '100vw',
    height: 70
  }
})

const Footer = ({classes}) => (
  <footer className={classes.footer}>
    <Toolbar classes={{root: classes.toolbar}}>
        <ContactLink variant="email" color="secondary"/>
        <ContactLink variant="phone" color="secondary"/>
    </Toolbar>
  </footer>
)

export default withStyles(styleOverrides)(Footer)
