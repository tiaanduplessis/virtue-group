import React from 'react'

import background from '../images/background.svg'

const Background = ({children}) => {
  console.log(background)
  return (
    <div className="background">
      {children}
      <style jsx>{`
        .background {
          min-height: calc(100vh);
          padding-top: 64px;
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  )
}

export default Background
