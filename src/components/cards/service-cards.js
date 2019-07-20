import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import ImageLoader from '../image-loader'

import electrical from '../../images/icons/services/electrical-dark.svg'
import maintenance from '../../images/icons/services/maintenance-dark.svg'
import plumbing from '../../images/icons/services/plumbing-dark.svg'
import construction from '../../images/icons/services/construction-dark.svg'
import loadingIcon from '../../images/icons/services/loading-dark.png'

import { withStyles } from '@material-ui/core/styles'
import { serviceCardStyles } from './styles'

import { servicesData } from '../../utils/data'

import {
  Typography,
  Button
} from '@material-ui/core'

const serviceIcons = {
  electrical,
  maintenance,
  plumbing,
  construction
}

const carouselProps = {
  mouseDragEnabled: true,
  infinite: false,
  responsive: {
    0: { items: 1},
    720: { items: 2 },
    1020: { items: 3 },
    1280: { items: 4 }
  }
}

class ServiceCards extends PureComponent {

  handleOnDragStart = e => e.preventDefault()

  renderCard = service => {
    const { classes } = this.props
    const { name, description, route } = service

    return (
        <div
          key={name}
          className={classes.cardContainer}
          onDragStart={this.handleOnDragStart}
        >
          <ImageLoader
            style={{height: 100, width: 100}}
            hdImage={serviceIcons[name]}
            sdImage={loadingIcon}
            alt={`${name}-icon`}
            variant="image"
          />

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
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <AliceCarousel {...carouselProps}>
          {servicesData.map(service => this.renderCard(service))}
        </AliceCarousel>

      </div>
    )
  }
}


export default withStyles(serviceCardStyles)(ServiceCards)
