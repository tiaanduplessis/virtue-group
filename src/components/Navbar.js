import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import windowSize from 'react-window-size'

import { withStyles } from '@material-ui/core/styles'

import {
  AppBar, Tabs, Tab, SwipeableDrawer, Button,
  List, ListItem, ListItemText, Typography, ListItemIcon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'

import Logo from './Logo'

const icon = {
  Home: <HomeIcon/>,
  About: <PersonIcon/>,
  Services: <BuildIcon/>,
  Contact: <EmailIcon/>
}

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const styleOverrides = theme => ({
  appbar: {
    ...theme.container
  },
  toolbar: {
    padding: '12px',
    width: '100%'
  },
  tabs: {
    width: '100%',
    padding: '0 12px'
  },
  label: {
    fontSize: '1em',
    letterSpacing: 1.5
  },
  indicator: {
    height: 3
  },
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  },
  list: {
    minWidth: 200,
  },
  selectedLink: {
    fontWeight: 700
  },
  iconButton: {
    color: theme.color.white
  },
  mobileNavbar: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    height: 48
  },
  title: {
    color: theme.color.white,
    fontWeight: 400,
    textTransform: 'capitalize',
    paddingLeft: 20
  }
})

class Navbar extends PureComponent {

  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    const { classes, value, navData, handleChange, windowWidth } = this.props
    const isMobile = windowWidth < 760
    const selectedName = navData[value].name

    const desktopNav = (
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
              label: classes.label,
              selected: classes.selected
            }}
          />
        ))}
      </Tabs>
    )

    const sideList = (
      <div className={classes.list}>
        <List>
          {navData.map(item => (
            <Link to={item.path}>
              <ListItem button key={item.id}>
                <ListItemIcon>{icon[item.name]}</ListItemIcon>
                <ListItemText>
                  <Typography
                    classes={{
                      root: item.name===selectedName ? classes.selectedLink : null
                    }}
                    variant="subtitle1"
                  > {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    const mobileNav = (
      <div className={classes.mobileNavbar}>
        <Button
          onClick={this.toggleDrawer}
          classes={{root: classes.iconButton}}
        >
          <MenuIcon/>
          <Typography classes={{root: classes.title}} variant="h6">
            {selectedName}
          </Typography>
        </Button>


        <SwipeableDrawer
          open={open}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
          disableBackdropTransition={!iOS && isMobile}
          disableDiscovery={iOS}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )

    return (
      <AppBar classes={{root: !isMobile ? classes.appbar : null}}>
        <div className={classes.toolbar}>
          <Logo compact/>
        </div>
        {isMobile ? mobileNav : desktopNav}
      </AppBar>
    )
  }
}

export default windowSize(
  withStyles(styleOverrides)(Navbar)
)
