import React from 'react'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import ContactForm from '../components/ContactForm'
import AddressCard from '../components/AddressCard'

const styles = theme => ({
  container: {
    ...theme.container,
    paddingTop: 30
  },
  grid: {
    margin: -12
  }
})

const Contact = ({classes}) => {
  return (
    <section className={classes.container}>
      <Grid container spacing={24} classes={{container: classes.grid}}>
        <Grid item xs={12} sm={6}>
          <ContactForm/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddressCard/>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(Contact)
