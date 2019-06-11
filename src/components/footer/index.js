import React from 'react'

import footerStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import ContactLink from '../links/contact-link'
import { Toolbar } from '@material-ui/core'

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

export default withStyles(footerStyles)(Footer)
