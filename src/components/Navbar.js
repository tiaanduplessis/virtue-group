import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'

import Logo from './Logo'

const styleOverrides = theme => ({
  appbar: {
    ...theme.container
  },
  toolbar: {
    padding: '0 12px',
    width: '100%'
  },
  tabs: {
    width: '100%',
    padding: '0 12px'
  },
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  }
})

const Navbar = ({classes, value, navData, handleChange}) => (
  <AppBar classes={{root: classes.appbar}}>
    <Toolbar classes={{root: classes.toolbar}}>
      <Logo compact/>
    </Toolbar>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="off"
      classes={{root: classes.tabs}}
    >
      {navData.map((page, index) => (
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
