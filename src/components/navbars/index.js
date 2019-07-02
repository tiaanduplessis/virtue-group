import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"

import windowSize from 'react-window-size'

import { navbarStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Tabs,
  Tab,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'

import Logo from '../logo'

const icon = {
  Home: <HomeIcon/>,
  About: <PersonIcon/>,
  Services: <BuildIcon/>,
  Contact: <EmailIcon/>
}

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

class Navbar extends PureComponent {

  state = {
    visible: true,
    listVisible: false
  }

  toggleDrawer = () => {
    this.setState({listVisible: !this.state.listVisible})
  }

  render() {
    const { listVisible } = this.state

    const {
      classes,
      value,
      navData,
      handleChange,
      windowWidth
    } = this.props

    const isMobile = windowWidth < 760
    const selectedName = navData[value].name

    const desktopNav = (
      <Tabs
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
              wrapper: classes.label,
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
            <Link key={item.name} to={item.path}>
              <ListItem button key={item.id}>
                <ListItemIcon>{icon[item.name]}</ListItemIcon>
                <ListItemText>
                  <Typography
                    classes={{
                      subtitle1: item.name===selectedName ? classes.selectedLink : null
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
          <Typography
            classes={{h6: classes.title}}
            variant="h6"
          >
            {selectedName}
          </Typography>
        </Button>

        <SwipeableDrawer
          open={listVisible}
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
      <AppBar
        classes={{
          root: isMobile ? classes.mobileAppbar : classes.appbar
        }}
      >
        <div className={classes.toolbar}>
          {isMobile && mobileNav}
          <Logo compact size={isMobile ? 1.8 : 2.2}/>
          {!isMobile && desktopNav}
        </div>
      </AppBar>
    )
  }
}

export default windowSize(
  withStyles(navbarStyles)(Navbar)
)
