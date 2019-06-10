import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import windowSize from 'react-window-size'

import { withStyles } from '@material-ui/core/styles'

import {
  AppBar, Tabs, Tab, SwipeableDrawer, Button, List, ListItem,
  ListItemText, Typography, ListItemIcon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'

import Logo from './logo'

const icon = {
  Home: <HomeIcon/>,
  About: <PersonIcon/>,
  Services: <BuildIcon/>,
  Contact: <EmailIcon/>
}

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const styleOverrides = theme => ({
  appbar: {
    ...theme.container,
    backgroundColor: theme.palette.primary.dark
  },
  mobileAppbar: {
    paddingRight: 20,
    backgroundColor: theme.palette.primary.dark
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minHeight: 70
  },
  tabs: {
    padding: '0 12px'
  },
  tab: {
    minWidth: 92,
    padding: 0
  },
  label: {
    fontSize: 14,
    letterSpacing: 1.5
  },
  indicator: {
    height: 3,
    backgroundColor: theme.colors.white
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
    color: theme.colors.white
  },
  mobileNavbar: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    height: 48
  },
  title: {
    color: theme.colors.white,
    fontWeight: 400,
    textTransform: 'capitalize',
    paddingLeft: 15
  }
})

const active = {
  visibility: 'visible',
  transition: 'all 200ms ease-in'
}

const hidden = {
  visibility: 'hidden',
  transition: 'all 200ms ease-out',
  transform: 'translate(0, -100%)'
}

class Navbar extends PureComponent {

  state = {
    visible: true,
    listVisible: false,
    showNavbar: true,
    scrollPos: 0
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // https://medium.com/@glweems/react-auto-hide-on-scroll-navbar-617a6749a96
  handleScroll = () => {
    const { scrollPos } = this.state
    const { top } = document.body.getBoundingClientRect()
    this.setState({
      scrollPos: top,
      showNavbar: top > scrollPos
    })
  }

  toggleDrawer = () => {
    this.setState({listVisible: !this.state.listVisible})
  }

  render() {
    const { listVisible, showNavbar } = this.state
    const { classes, value, navData, handleChange, windowWidth } = this.props
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
  withStyles(styleOverrides)(Navbar)
)