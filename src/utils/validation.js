const validateField = target => {
  const { value, required, name } = target
  const regex = testField[name]
  const errorObj = {}

  if(regex && !regex.re.test(value)) {
    errorObj[name] = regex.message
  }
  if(required && !value.length) {
    errorObj[name] = 'Required'
  }

  return errorObj
}

const validateForm = form => {
  const fields = Array.prototype.slice.call(
    form.querySelectorAll('input, textarea')
  )

  return fields.reduce((obj, field) => {
    return Object.assign(validateField(field), obj)
  }, {})
}

// http://emailregex.com/
const testField = {
  emailAddress: {
    // eslint-disable-next-line
    re: /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    message: 'Email not valid'
  }
}

module.exports = {
  validateField,
  validateForm
}
