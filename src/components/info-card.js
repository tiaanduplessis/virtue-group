import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'

import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const variantIcon = {
  email: <MailOutlineIcon />,
  phone: <PhoneIcon />
}

const styleOverrides = theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.paper,
    padding: 24,
    borderRadius: 4,
    boxShadow:
      `0px 1px 3px 0px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 2px 1px -1px rgba(0,0,0,0.12)`
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: '1.2em',
    marginLeft: 20
  }
})

const InfoCard = ({classes, text, variant}) => (
  <Grid item xs={12} md={6}>
    <div className={classes.card}>
      {variantIcon[variant]}
      <Typography variant="subtitle1" classes={{root: classes.text}}>
        {text}
      </Typography>
    </div>
  </Grid>
)

export default withStyles(styleOverrides)(InfoCard)
