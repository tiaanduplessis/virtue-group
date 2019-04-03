import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import { AppBar, Tabs, Tab } from '@material-ui/core/'

import Electrical from './Electrical'
import Construction from './Construction'
import Plumbing from './Plumbing'
import Maintenance from './Maintenance'

import { servicePages } from '../../utils/navData'

const pages = { Electrical, Construction, Plumbing, Maintenance }

class Services extends Component {
  state = {
    value: 0,
    index: 0
  }

  handleChange = (props, value) => {
    this.setState({ value }, () => {
      const newRoute = servicePages[value].path
      this.props.history.push(`/services${newRoute}`)
    })
  }

  handleChangeIndex = index => {
    this.setState({value: index})
  }

  render() {

    const { value } = this.state
    const { match } = this.props

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            variant="scrollable"
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
           {servicePages.map(page => (
             <Tab key={page.name} label={page.name} />
           ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          {servicePages.map(page => (
            <div key={page.name} dir={'x-reverse'}>
              <Switch>
                {servicePages.map(item =>
                  <Route key={item.id} path={`services/electrical`} component={pages[Electrical]}/>
                )}
              </Switch>
            </div>
          ))}
        </SwipeableViews>
      </div>
    )
  }
}

export default withRouter(Services)
