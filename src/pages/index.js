import React, { Component, Fragment } from 'react'

import BackgroundImageOnLoad from 'background-image-on-load';

import homeStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import homeImageHq from '../images/home-image-hq.png'
import homeImageLq from '../images/home-image-lq.png'

import { Typography } from '@material-ui/core'
import ServiceCards from '../components/cards/service-cards'

class Home extends Component {

  state = {
    bgIsLoaded: false
  }

  render() {
    const { bgIsLoaded } = this.state
    const { classes } = this.props

    return (
      <Fragment>
        <div className="homeImage">
          <BackgroundImageOnLoad
            src={homeImageHq}
            onLoadBg={() =>
              this.setState({
              bgIsLoaded: true
            })}
            onError={err => console.log('error', err)}
          />
        </div>

        <Typography
          align="center"
          variant="h4"
          classes={{
            h4: classes.subtitle
          }}
        >
          Services that we provide
        </Typography>

        <ServiceCards>lorem ispum</ServiceCards>

        <style jsx>{`
          .homeImage {
            width: 100vw;
            padding-top: calc(50vh - 70px);
            overflow: hidden;
            background-image: url(${bgIsLoaded ? homeImageHq: homeImageLq});
            background-repeat: no-repeat;
            background-size: cover;
            background-color: rgba(23, 38, 47, 0.1);
          }
        `}</style>
      </Fragment>
    )
  }
}

export default withStyles(homeStyles)(Home)
