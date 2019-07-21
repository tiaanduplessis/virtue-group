import React from 'react'

import { Fab as MuiFab } from '@material-ui/core'

import {
  KeyboardArrowRight,
  KeyboardArrowLeft
} from '@material-ui/icons'

const getIcon = variant => {
  switch(variant) {
    case 'arrowLeft':
      return <KeyboardArrowLeft/>
    case 'arrowRight':
      return <KeyboardArrowRight />
    default:
      return 'x'
  }
}

const Fab = ({variant, tooltip, ...otherProps}) => {

  return (
    <MuiFab
      size="small"
      {...otherProps}
    >
      {getIcon(variant)}
    </MuiFab>
  )
}

Fab.defaultProps = {
  variant: 'default'
}

export default Fab
