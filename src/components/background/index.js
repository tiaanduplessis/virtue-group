import React from 'react'

import Footer from '../footer'

import background from '../../images/background.svg'
import bottomImage from '../../images/page-bottom.svg'

const Background = ({children}) => (
  <div className="pageHolder">
    <div className="background"/>

    <div className="pageContent">{children}</div>

    <img
      src={bottomImage}
      alt="background bottom"
      className="bottomImage"
    />

    <Footer />

    <style jsx>{`
      .pageHolder {
        min-width: 100vw;
        min-height: 100vh;
      }
      .pageContent {
        min-height: calc(100vh - 106px);
        padding-top: 70px;
      }
      .bottomImage {
        position: fixed;
        bottom: 0px;
        z-index: -1;
        width: 100%;
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
)



export default Background
