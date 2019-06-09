import React from 'react'
import MaskedInput from 'react-text-mask'

const TelInput = ({ inputRef, ...other }) => (
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

export default TelInput
