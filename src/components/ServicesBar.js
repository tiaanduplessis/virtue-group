import React from 'react'
import { Link } from "react-router-dom"

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import construction from '../images/icons/construction.svg'
import electrical from '../images/icons/electrical.svg'
import maintenance from '../images/icons/maintenance.svg'
import plumbing from '../images/icons/plumbing.svg'

import { servicesData } from '../utils/data'
const icons = { construction, electrical, maintenance, plumbing }

const styleOverrides = theme => ({
  container: {
    ...theme.container,
    paddingTop: theme.spacing.units * 2,
    paddingBottom: theme.spacing.units * 2,
    backgroundColor: theme.palette.primary.light
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.white,
    fontWeight: 400,
    fontStyle: 'italic'
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '1.3em',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: theme.spacing.units * 3,
    color: theme.colors.white
  }
})

const ServicesBar = ({classes}) =>  (
  <div className={classes.container}>
    <Grid
      container
      spacing={40}
      justify="space-between"
    >
      <Grid item xs={12}>
        <Typography
          classes={{root: classes.title}}
          gutterBottom
          variant="h4"
        > Services we provide...
        </Typography>
      </Grid>

      {servicesData.map(service => (
        <Grid item xs={12} sm={3}>
          <Link to={`/services/${service.name}`} className={classes.item}>
            <img src={icons[service.name]} alt={service.name} />

            <Typography
              variant="h6"
              classes={{root: classes.subtitle}}
            > {service.name}
            </Typography>
          </Link>
        </Grid>
      ))}

    </Grid>
  </div>
)


export default withStyles(styleOverrides)(ServicesBar)
