import React, { PureComponent } from 'react'
import windowSize from 'react-window-size'

import Carousel from 'react-multi-carousel'
import Fab from '../buttons/fab'

import 'react-multi-carousel/lib/styles.css'

import { withStyles } from '@material-ui/core/styles'
import { carouselStyles } from './styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1360, min: 720 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}

const ImageCarousel = ({ classes, windowWidth, children }) => {

  const showDots = windowWidth <= responsive.tablet.breakpoint.max

  const ArrowRight = props => (
    <Fab
      variant="arrowRight"
      classes={{root: classes.buttonRight}}
      {...props}
    />
  )

  const ArrowLeft = props => (
    <Fab
      variant="arrowLeft"
      classes={{root: classes.buttonLeft}}
      {...props}
    />
  )

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={showDots}
      responsive={responsive}
      ssr={true}
      infinite={false}
      keyBoardControl={true}
      containerClass="carousel-container"
      deviceType="desktop"
      customRightArrow={<ArrowRight />}
      customLeftArrow={<ArrowLeft />}
      containerClass={classes.container}
      itemClass={classes.item}
    >
      {children}
    </Carousel>
  )

}


export default windowSize(
  withStyles(carouselStyles)(ImageCarousel)
)
