import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { cardStyles } from './styles'

import { Grid, Card as MuiCard } from '@material-ui/core'

const Card = ({classes, width, variant, children}) => (
  <Grid item xs={12} md={width} >
    <MuiCard
      classes={{root: classes.card}}
      className={classes[`${variant}Card`]}
    >
      {children}
    </MuiCard>
  </Grid>
)

Card.defaultProps = {
  variant: 'defualt',
  width: 12
}

export default withStyles(cardStyles)(Card)
