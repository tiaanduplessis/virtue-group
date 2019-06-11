import React from 'react'

import { cardStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'

const Card = ({classes, width, children}) => (
  <Grid item xs={12} md={width}>
    <div className={classes.card}>
      {children}
    </div>
  </Grid>
)

Card.defaultProps = {
  width: 12
}

export default withStyles(cardStyles)(Card)
