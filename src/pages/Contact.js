import React from 'react'

import { Grid } from '@material-ui/core'

import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <ContactForm/>
      </Grid>
    </Grid>
  )
}

export default Contact
