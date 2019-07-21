import React, { PureComponent } from 'react'
import windowSize from 'react-window-size'

import footerStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import ContactLink from '../links/contact-link'
import { Toolbar } from '@material-ui/core'

class Footer extends PureComponent {

  render () {
    const { classes, windowWidth } = this.props
    const isMobile = windowWidth < 760

    return (
      <footer
        className={isMobile ? classes.mobileFooter : classes.footer}
      >
        <Toolbar
          classes={{root: classes.toolbar}}
          className={isMobile ? classes.mobileToolbar : null}
        >
            <ContactLink
              variant="email"
              color="secondary"
              style={{margin: '8px 0'}}
            />
            <ContactLink
              variant="phone"
              color="secondary"
              style={{margin: '8px 0 8px 36px'}}
            />
        </Toolbar>
      </footer>
    )
  }
}



export default windowSize(
  withStyles(footerStyles)(Footer)
)
