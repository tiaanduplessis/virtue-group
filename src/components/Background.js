import React from 'react'

import Footer from './footer'

import background from '../images/background.svg'
import pageBottom from '../images/page-bottom.svg'

const Background = ({children}) => (
  <div className="pageHolder">
    <div className="background"/>

    <Footer />

    <div className="pageContent">{children}</div>

    <img
      src={pageBottom}
      alt="background bottom"
      className="pageBottom"
    />

    <style jsx>{`
      .pageHolder {
        min-width: 100vw;
        min-height: 100vh;
      }
      .pageContent {
        padding-top: 70px;
      }
      .pageBottom {
        position: absolute;
        bottom: 70px;
        z-index: -1;
        width: 100%;
      }
      .background {
        position: fixed;
        min-width: 100vw;
        min-height: 100vh;
        // background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        background-color: rgba(23, 38, 47, 0.1);
      }
    `}</style>
  </div>
)



export default Background
