import React, { PureComponent } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import ContactForm from '../components/contact-form'
import AddressCard from '../components/address-card'
import InfoCard from '../components/info-card'

import ContactLink from '../components/contact-link'

const styles = theme => ({
  container: {
    ...theme.container,
    paddingTop: 30
  },
  anchor: {
    color: theme.palette.primary.main,
    fontSize: '1em'
  }
})

class Contact extends PureComponent {

  componentDidMount() {
    this.awakenServer()
  }

  awakenServer = async() => {
    try {
      const res = await axios.get('https://virtue-mailer.herokuapp.com/')
      if (res.status !== 200) {
        throw new Error(`Invalid response code ${res.status}`)
      }
      console.log({res})
    } catch(err) {
      console.log(err)
    }
  }

  render() {

    const { classes } = this.props

    return (
      <section className={classes.container}>
        <Grid container spacing={2}>

          <InfoCard
            text={<ContactLink variant="email"/>}
            variant="email"
          />

          <InfoCard
            text={<ContactLink variant="phone"/>}
            variant="phone"
          />

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
}

export default withStyles(styles)(Contact)
