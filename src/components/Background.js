import React from 'react'

import background from '../images/background.svg'

const Background = ({children}) => {
  return <div className="page-holder">
    <div className="background"/>
    {children}
    <style jsx>{`
      .page-holder {
        min-width: 100vw;
        min-height: 100vh;
        padding-top: 112px;
      }
      .background {
        position: fixed;
        min-width: 100vw;
        min-height: calc(100vh - 112px);
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
    `}</style>
  </div>
}

export default Background
