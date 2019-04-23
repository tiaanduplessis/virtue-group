import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ServicesBar from '../components/ServicesBar'

const styleOverrides = theme => ({

})

const Home = ({classes}) => {
  return (
    <Fragment>
      <ServicesBar />
    </Fragment>
  )
}

export default withStyles(styleOverrides)(Home)
