import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import {
  Grid, Card, CardHeader, CardContent, Typography, CardActions, Button
} from '@material-ui/core'

import construction from '../images/icons/construction.svg'
import electrical from '../images/icons/electrical.svg'
import maintenance from '../images/icons/maintenance.svg'
import plumbing from '../images/icons/plumbing.svg'

const styleOverrides = theme => ({
  container: {
    ...theme.container
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  icon: {
    display: 'flex',
    '& img': {
      margin: '0 auto',
      height: 150,
      width: 150,
    }
  },
  title: {
    '& div': {
      fontSize: '2em',
      fontWeight: 500,
      color: theme.palette.primary.main,
      textAlign: 'center'
    }
  },
  content: {
    height: 90,
    overflow: 'hidden'
  },
  subtitle: {
    color: theme.color.grey,
  }
})

const Home = ({classes}) => {
  return (
    <div className={classes.container}>
      <Grid container spacing={40}>

        <Grid item xs={12} sm={6} md={3}>
          <Card raised classes={{root: classes.card}}>
            <CardContent classes={{root: classes.icon}}>
              <img src={plumbing} alt="plumbing" />
            </CardContent>

            <CardHeader
              disableTypography
              title="Plumbing"
              classes={{root: classes.title}}
            />

          <CardContent classes={{root: classes.content}}>
              <Typography classes={{root: classes.subtitle}} variant="subtitle1">
                Short description of component here...
              </Typography>
            </CardContent>

            <CardActions>
              <div style={{flexGrow: 1}}/>
              <Button color="primary">More</Button>
            </CardActions>

          </Card>
        </Grid>

      </Grid>
    </div>
  )
}

export default withStyles(styleOverrides)(Home)
