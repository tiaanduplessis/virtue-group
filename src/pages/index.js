import React, { Component, Fragment } from 'react'

import BackgroundImageOnLoad from 'background-image-on-load';

import homeStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import homeImage from '../images/home-image.png'
import homeImageLowQuality from '../images/home-image-low-quality.png'

import { Typography } from '@material-ui/core'

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
            src={homeImage}
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

        <style jsx>{`
          .homeImage {
            width: 100vw;
            padding-top: calc(50vh - 70px);
            overflow: hidden;
            background-image: url(${bgIsLoaded ? homeImage: homeImageLowQuality});
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
