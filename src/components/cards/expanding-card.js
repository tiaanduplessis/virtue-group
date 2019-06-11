import React from 'react'

import { expandingCardStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SendIcon from '@material-ui/icons/Send'
import HomeIcon  from '@material-ui/icons/Home'
import MailOutlineIcon  from '@material-ui/icons/MailOutline'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Avatar,
  Toolbar
} from '@material-ui/core'

const iconVariants = {
  send: <SendIcon/>,
  home: <HomeIcon />,
  mail: <MailOutlineIcon/>
}

const ExpandingCard = props => {

  const {
    classes,
    variant,
    title,
    children,
    defaultExpanded
  } = props

  const icon = variant ? iconVariants[variant] : null

  return (
    <ExpansionPanel
      classes={{root: classes.paper}}
      defaultExpanded={defaultExpanded}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >

        <Toolbar classes={{root: classes.toolbar}}>
          {icon ? (
            <Avatar>
              {icon}
            </Avatar>
          ): null}

          <Typography
            classes={{h6: classes.title}}
            variant="h6"
            color="primary"
          >
            {title}
          </Typography>
        </Toolbar>

      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}


export default withStyles(expandingCardStyles)(ExpandingCard)
