import React from 'react'

import background from '../images/background.svg'

const Background = ({children}) => {
  return <div className="page-holder">
    <div className="background"/>
    {children}
    <style jsx>{`
      .page-holder {
        min-width: 100vw;
        min-height: calc(100vh);
        padding-top: 120px;
      }
      .background {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
      }
    `}</style>
  </div>
}

export default Background
