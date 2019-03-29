import React from 'react'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import ContactForm from '../components/ContactForm'
import AddressCard from '../components/AddressCard'

const styles = theme => ({
  container: {
    ...theme.container,
    paddingTop: 30
  }
})

const Contact = ({classes}) => {
  return (
    <section className={classes.container}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ContactForm/>
        </Grid>
        <Grid item xs={12}>
          <AddressCard/>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(Contact)
