import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import electricalIcon from '../../images/icons/services/electrical-dark.svg'

import { withStyles } from '@material-ui/core/styles'

import { servicesData } from '../../utils/data'

import {
  Typography,
  Button,
  Grid
} from '@material-ui/core'

const serviceCardStyles = theme => ({
  container: {
    ...theme.container
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 340
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'uppercase',
    marginTop: 16
  },
  cardDescription: {
    marginTop: 16,
    height: 50,
    overflow: 'hidden',
    fontSize: 16,
    opacity: .6,
    textAlign: 'center'
  },
  button: {
    marginTop: 16,
    backgroundColor: '#009688',
    '& a': {
      textTransform: 'uppercase',
      color: theme.colors.white,
      fontSize: 14
    }
  }
})

class ServiceCards extends PureComponent {

  renderCard = service => {
    const { classes } = this.props
    const { name, description, route } = service

    return (
      <Grid item xs={12} md={6} lg={3} key={name}>
        <div className={classes.cardContainer}>
          <img src={electricalIcon} alt={`${name}-icon`} />

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
        <Grid container spacing={4} align="center">
          {servicesData.map(service => this.renderCard(service))}
        </Grid>
      </div>
    )
  }
}


export default withStyles(serviceCardStyles)(ServiceCards)
