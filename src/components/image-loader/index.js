import React, { PureComponent } from 'react'
import { Skeleton } from '@material-ui/lab'

class ImageLoader extends PureComponent {

  static defaultProps = {
    variant: 'default',
    skeletonProps: { variant: "circle", width: 100, height: 100 }
  }

  state = {
    imageIsLoaded: false
  }

  handleImageLoaded = () => {
    this.setState({imageIsLoaded: true})
  }

  renderDefaultImage = imageIsLoaded => {
    const {
      hdImage,
      skeletonProps,
      alt,
      ...otherProps
    } = this.props

    return (
      <>
        <img
          className={imageIsLoaded ? '' : 'hidden'}
          src={hdImage}
          alt={alt}
          onLoad={this.handleImageLoaded}
          {...otherProps}
        />
        {!imageIsLoaded && <Skeleton {...skeletonProps}/>}
        <style jsx>{`
          .hidden {
            display: none
          }
        `}</style>
      </>
    )
  }

  renderBackgroundImage = imageIsLoaded => {
    const {
      hdImage,
      sdImage,
      ...otherProps
    } = this.props

    return (
      <>
        {!imageIsLoaded && (
          <img
            style={{display: 'none'}}
            src={hdImage}
            alt="temp"
            onLoad={this.handleImageLoaded}
          />
        )}
        <div className="image"
          {...otherProps}
        />
        <style jsx>{`
          .image {
            width: 100vw;
            overflow: hidden;
            background-image: url(${sdImage && !imageIsLoaded ? sdImage : hdImage});
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}</style>
      </>
    )
  }

  render() {
    const { imageIsLoaded } = this.state
    const { variant } = this.props

    return variant === 'background' ? (
      this.renderBackgroundImage(imageIsLoaded)
    ) : (
      this.renderDefaultImage(imageIsLoaded)
    )
  }
}

export default ImageLoader
