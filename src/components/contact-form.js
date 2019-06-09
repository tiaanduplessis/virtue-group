import React, { PureComponent } from 'react'
import axios from 'axios'

import { validateField, validateForm } from '../utils/validation'

import {
  Grid, TextField, Button, FormControl, InputLabel, Input, CircularProgress
} from '@material-ui/core'

import TelInput from './tel-input'

import SendIcon from '@material-ui/icons/Send'
import ExpandingCard from './expanding-card'

const styles = {
  form: {
    width: '100%'
  },
  button: {
    marginTop: 22,
    height: 40
  }
}

class ContactForm extends PureComponent {

  state = {
    name: '',
    company: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
    validationErrors: {},
    previousErrors: [],
    isLoading: false
  }

  handleChange = event => {
    const { previousErrors, validationErrors } = this.state
    const { name , value } = event.target
    let errors = Object.assign({}, validationErrors)

    if (previousErrors.includes(name)) {
      const newErrors = validateField(event.target)

      if (Object.entries(newErrors).length) {
        errors = Object.assign(validationErrors, newErrors)
      } else {
        delete errors[name]
      }
    }
    this.setState({[name]: value, validationErrors: errors})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const validationErrors = validateForm(event.target)
    const errorsArr = Object.entries(validationErrors)

    if (errorsArr.length) {
      const previousErrors = errorsArr.map(([key]) => key)
      return this.setState({validationErrors, previousErrors})
    }

    setTimeout(() => {
      this.setState({isLoading: true, validationErrors: {}})
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
      name, company, emailAddress, phoneNumber, subject, message, isLoading,
      validationErrors
    } = this.state

    const form = (
      <form
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
        style={styles.form}
      >
        <Grid container spacing={5}>
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
              helperText={validationErrors.name || null}
              error={!!validationErrors.name}
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
              helperText={validationErrors.emailAddress || null}
              error={!!validationErrors.emailAddress}
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
                inputComponent={TelInput}
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
          helperText={validationErrors.message || null}
          error={!!validationErrors.message}
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
