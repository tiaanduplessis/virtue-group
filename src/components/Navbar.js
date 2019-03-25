import React from 'react'

import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'

import Logo from './Logo'

const Navbar = ({value, navData, handleChange}) => (
  <AppBar>
    <Toolbar>
      <Logo compact={true}/>
    </Toolbar>
    <Tabs value={value} onChange={handleChange}>
      { navData.map(page => (
        <Tab key={page.id} label={page.name} />
      ))}
    </Tabs>
  </AppBar>
)

export default Navbar
