import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import homeImage from '../images/home-image.png'

import { Typography } from '@material-ui/core'

const styleOverrides = theme => ({
  subtitle: {
    fontSize: 28,
    margin: '32px 0',
    fontWeight: 600,
    textTransform: 'uppercase'
  }
})

const Home = ({classes}) => {
  return (
    <Fragment>
      <div className="home-image"/>
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
        .home-image {
          width: 100vw;
          padding-top: calc(50vh - 70px);
          overflow: hidden;
          background-image: url(${homeImage});
          background-repeat: no-repeat;
          background-size: cover;
          background-color: rgba(23, 38, 47, 0.1);
        }
      `}</style>


    </Fragment>
  )
}

export default withStyles(styleOverrides)(Home)
