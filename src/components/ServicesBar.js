import React from 'react'
import { Link } from "react-router-dom"

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import TitleBox from './TitleBox'

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
    height: '200vh'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0',
    '&:hover h6': {
      color: theme.palette.primary.light
    }
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '1.3em',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: theme.spacing.units * 3,
    color: theme.palette.primary.main,
    transition: '100ms linear'
  },
  icon: {
    width: '70%',
    minWidth: 100,
    maxWidth: 160,
    margin: '0 auto'
  }
})

const ServicesBar = ({classes}) =>  (
  <div className={classes.container}>
    <Grid
      container
      spacing={40}
      justify="space-between"
    >
      <Grid item xs={12} align="center">
        <TitleBox path="/services">Services we provide</TitleBox>
      </Grid>

      {servicesData.map(service => (
        <Grid item xs={6} sm={3}>
          <Link to={`/services/${service.name}`} className={classes.item}>
            <img
              src={icons[service.name]}
              alt={service.name}
              className={classes.icon}
            />

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
