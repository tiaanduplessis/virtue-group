import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import {
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography,
  Avatar, Toolbar
} from '@material-ui/core'

const styleOverrides = theme => ({
  paper: {
    background: theme.palette.paper
  },
  toolbar: {
    padding: 0,
    minHeight: 'auto'
  },
  title: {
    marginLeft: theme.spacing.units * 2
  }
})

const ExpandingCard = ({ classes, icon, title, children, defaultExpanded }) => (
  <ExpansionPanel
    classes={{root: classes.paper}}
    defaultExpanded={defaultExpanded}
  >
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

      <Toolbar classes={{root: classes.toolbar}}>
        {icon ? (
          <Avatar>
            {icon}
          </Avatar>
        ): null}

        <Typography classes={{root: classes.title}} variant="h6" color="primary">
          {title}
        </Typography>
      </Toolbar>
    </ExpansionPanelSummary>

    <ExpansionPanelDetails>
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)


export default withStyles(styleOverrides)(ExpandingCard)
