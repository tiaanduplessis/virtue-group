import React from 'react'

import { Redirect, withRouter } from "react-router-dom"

import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/services/'
import Contact from '../pages/Contact'

const pages = {
  home: <Home/>,
  about: <About/>,
  services: <Services/>,
  'contact-us': <Contact/>
}

const PageContainer = ({match}) => {
  const { page } = match.params
  const pageFound = Object.keys(pages).includes(page)
  return pageFound ? pages[page] : <Redirect to="home"/>
}

export default withRouter(PageContainer)
