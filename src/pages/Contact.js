import React, { PureComponent } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import ContactForm from '../components/contact-form'
import AddressCard from '../components/address-card'
import InfoCard from '../components/info-card'

const styles = theme => ({
  container: {
    ...theme.container,
    paddingTop: 30
  },
  a: {
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
        <Grid container spacing={24}>

          <InfoCard
            text={(
              <a className={classes.a} href="mailto:magdel@virtuegroup.co.za">magdel@virtuegroup.co.za</a>
            )}
            variant="email"
          />
          <InfoCard
            text={(
              <a className={classes.a} href="tel:+27555555555"> +27 55 555-5555</a>
            )}
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
