import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { AppBar, Tabs, Tab, Typography } from '@material-ui/core/'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

class FullWidthTabs extends Component {
  state = {
    value: 0,
    index: 0
  }

  handleChange = (props, value) => {
    this.setState({ value })
  }

  handleChangeIndex = (props, index) => {
    console.log('here')
    console.log(props, index)
    this.setState({index})
  }

  render() {

    const { value } = this.state

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant={null}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={'x-reverse'}>Item One</TabContainer>
          <TabContainer dir={'x-reverse'}>Item Two</TabContainer>
          <TabContainer dir={'x-reverse'}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

export default FullWidthTabs
