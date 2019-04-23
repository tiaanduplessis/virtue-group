import React from 'react'

import background from '../images/background.svg'

const Background = ({children}) => {
  return <div className="pageHolder">
    <div className="background"/>
    <div className="pageContent">{children}</div>
    <style jsx>{`
      .pageHolder {
        min-width: 100vw;
        min-height: 100vh;
      }
      .pageContent {
        padding-top: 110px;
      }
      .background {
        position: fixed;
        min-width: 100vw;
        min-height: 100vh;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        background-color: rgba(23, 38, 47, 0.1);
      }
    `}</style>
  </div>
}

export default Background
