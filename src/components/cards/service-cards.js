import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import electrical from '../../images/icons/services/electrical-dark.svg'
import maintenance from '../../images/icons/services/maintenance-dark.svg'
import plumbing from '../../images/icons/services/plumbing-dark.svg'
import construction from '../../images/icons/services/construction-dark.svg'

import { withStyles } from '@material-ui/core/styles'
import { serviceCardStyles } from './styles'

import { servicesData } from '../../utils/data'

import {
  Typography,
  Button,
  Grid
} from '@material-ui/core'

const serviceIcons = {
  electrical,
  maintenance,
  plumbing,
  construction
}

class ServiceCards extends PureComponent {

  renderCard = service => {
    const { classes } = this.props
    const { name, description, route } = service

    return (
      <Grid item xs={12} md={6} lg={3} key={name}>
        <div className={classes.cardContainer}>
          <img src={serviceIcons[name]} alt={`${name}-icon`} />

          <Typography
            variant="subtitle1"
            classes={{subtitle1: classes.cardTitle}}>
            {name}
          </Typography>

          <Typography
            classes={{body1: classes.cardDescription}}>
            {description}
          </Typography>

          <Button
            classes={{root: classes.button}}
          >
            <Link to={route}>More Info</Link>
          </Button>

        </div>
      </Grid>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Grid
          container
          spacing={4}
          align="center"
          classes={{root: classes.gridContainer}}
        >
          {servicesData.map(service => this.renderCard(service))}
        </Grid>
      </div>
    )
  }
}


export default withStyles(serviceCardStyles)(ServiceCards)
