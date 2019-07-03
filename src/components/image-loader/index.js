import React, { PureComponent, Fragment } from 'react'
import BackgroundImageOnLoad from 'background-image-on-load';

class ImageLoader extends PureComponent {

  static defaultProps = {
    variant: 'default'
  }

  state = {
    hdImageIsLoaded: false
  }

  render() {
    const { hdImageIsLoaded } = this.state
    const { hdImage, sdImage, variant, alt, ...otherProps } = this.props

    const checkIfLoaded = (
      <BackgroundImageOnLoad
        src={hdImage}
        onLoadBg={() =>
          this.setState({
          hdImageIsLoaded: true
        })}
        onError={err => console.log('error', err)}
      />
    )

    return (
      <Fragment>
        {checkIfLoaded}
        {variant === 'default' ? (
          <div className="image"
            {...otherProps}
          />
        ) : (
          <img
            src={hdImageIsLoaded ? hdImage: sdImage}
            alt={alt || 'image'}
            {...otherProps}
          />
        )}

        <style jsx>{`
          .image {
            width: 100vw;
            overflow: hidden;
            background-image: url(${hdImageIsLoaded ? hdImage: sdImage});
            background-repeat: no-repeat;
            background-size: cover;
            background-color: rgba(23, 38, 47, 0.1);
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ImageLoader
