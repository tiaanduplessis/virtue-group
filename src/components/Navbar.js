import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'

import Logo from './Logo'

const styleOverrides = theme => ({
  appbar: {
    ...theme.container
  },
  toolbar: {
    padding: '12px 0',
    width: '100%'
  },
  tabs: {
    width: '100%'
  },
  indicator: {
    height: 3
  },
  labelContainer: {
    padding: '12px 0'
  },
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  }
})

const Navbar = ({classes, value, navData, handleChange}) => (
  <AppBar classes={{root: classes.appbar}}>
    <div className={classes.toolbar}>
      <Logo compact/>
    </div>
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      classes={{
        root: classes.tabs,
        indicator: classes.indicator
      }}
    >
      {navData.map((page, index) => (
        <Tab
          key={page.id}
          label={page.name}
          classes={{
            root: classes.tab,
            labelContainer: classes.labelContainer,
            selected: classes.selected
          }}
        />
      ))}
    </Tabs>
  </AppBar>
)

export default withStyles(styleOverrides)(Navbar)
