import React, { PureComponent } from 'react'
import axios from 'axios'
import MaskedInput from 'react-text-mask'

import {
  Grid, TextField, Button, FormControl, InputLabel, Input, CircularProgress
} from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send'
import ExpandingCard from './ExpandingCard'


const styles = {
  form: {
    width: '100%'
  },
  button: {
    marginTop: 22,
    height: 40
  }
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      type="tel"
    />
  )
}

class ContactForm extends PureComponent {

  state = {
    name: '',
    company: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
    isLoading: false
  }

  handleChange = event => {
    const { name , value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    setTimeout(() => {
      this.setState({isLoading: true})
    }, 200)

    const { name, company, emailAddress, phoneNumber, subject, message } = this.state

    try {
      const res = await axios.post('https://virtue-mailer.herokuapp.com/send', {
        emailAddress, phoneNumber, name, company, subject, message
      })

      if (res.status !== 200) {
        throw new Error(`Invalid response code ${res.status}`)
      }
      this.setState({isLoading: false})
      console.log({res})

    } catch(err) {
      console.log({err})
      this.setState({isLoading: false})
    }
  }

  render () {
    const {
      name, company, emailAddress, phoneNumber, subject, message, isLoading
    } = this.state

    const form = (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off" style={styles.form}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={name}
              type="text"
              onChange={this.handleChange}
              margin="normal"
              disabled={isLoading}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="emailAddress"
              value={emailAddress}
              autoComplete="email"
              margin="normal"
              onChange={this.handleChange}
              disabled={isLoading}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="formatted-text-mask-input">Phone number</InputLabel>
              <Input
                id="formatted-text-mask-input"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                inputComponent={TextMaskCustom}
                disabled={isLoading}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="company"
              label="Company"
              value={company}
              type="text"
              onChange={this.handleChange}
              margin="normal"
              disabled={isLoading}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={subject}
          onChange={this.handleChange}
          margin="normal"
          disabled={isLoading}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={message}
          onChange={this.handleChange}
          multiline
          rows="3"
          rowsMax="4"
          margin="normal"
          disabled={isLoading}
          required
        />

      <Button style={styles.button} fullWidth type="submit" disabled={isLoading}>
          {isLoading ? <CircularProgress size={30}/> : "Submit"}
        </Button>
      </form>
    )

    return (
      <ExpandingCard
        title="Send us a message"
        icon={<SendIcon/>}
        defaultExpanded
      >
      {form}
      </ExpandingCard>
    )
  }
}

export default ContactForm
