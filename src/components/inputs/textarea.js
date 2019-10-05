import React from 'react'

import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const TextArea = ({ inputRef, ...other }) => (
  <TextareaAutosize
    {...other}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null)
    }}
    rows="4"
  />
)

export default TextArea
