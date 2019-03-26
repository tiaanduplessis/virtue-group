import React, { PureComponent } from 'react'

import { withStyles } from '@material-ui/core/styles'

import { Paper, Typography } from '@material-ui/core'

const styleOverrides = theme => ({
  paper: {
    padding: 30,
    background: theme.palette.paper
  }
})

class ContactForm extends PureComponent {

  render () {

    const { classes } = this.props

    return (
      <Paper classes={{root: classes.paper}}>
        <Typography gutterBottom variant="h5" color="primary">
          Business Address
        </Typography>
      </Paper>
    )
  }
}

export default withStyles(styleOverrides)(ContactForm)
