import React, { PureComponent } from 'react'

import TextField from '@material-ui/core/TextField'

class Contact extends PureComponent {

  state = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  }

  handleSubmit = () => {
    console.log('submitting')
  }

  render () {

    return (
      <form>
        <button type="submit">submit</button>
      </form>

    )
  }
}

export default Contact
