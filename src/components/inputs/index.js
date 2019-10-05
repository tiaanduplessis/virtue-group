import React, { PureComponent } from 'react'

import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input as MuiInput
} from '@material-ui/core'

import TelInput from './tel-input'
import TextArea from './textarea'

const componentType = {
  text: 'input',
  textarea: TextArea,
  tel: TelInput,
}


class Input extends PureComponent {
  render () {

    const {
      variant,
      type,
      label,
      helperText,
      required,
      ...otherProps
    } = this.props

    return (
      <FormControl
        fullWidth
        margin="normal"
      >
        <InputLabel
          htmlFor="formatted-input"
        >
          {label} {required && '*'}
        </InputLabel>
        <MuiInput
          id="formatted-input"
          type={type}
          inputComponent={componentType[type]}
          required={required}
          {...otherProps}
        />
        <FormHelperText error>
          {helperText}
        </FormHelperText>
      </FormControl>
    )
  }
}

Input.defaultProps = {
  variant: 'default',
  type: 'text'
}

export default Input
