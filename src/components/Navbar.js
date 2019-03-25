import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'

import Logo from './Logo'

const styleOverrides = theme => ({
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  }
})

const Navbar = ({classes, value, navData, handleChange}) => (
  <AppBar>
    <Toolbar>
      <Logo compact={true}/>
    </Toolbar>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="off"
    >
      { navData.map((page, index) => (
        <Tab
          key={page.id}
          label={page.name}
          classes={{selected: classes.selected}}
        />
      ))}
    </Tabs>
  </AppBar>
)

export default withStyles(styleOverrides)(Navbar)
