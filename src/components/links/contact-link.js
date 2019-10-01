import React from 'react'

import { useTheme } from '@material-ui/styles'

import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import Link from '@material-ui/core/Link'

import data from './data'

const iconVariant = {
  phone: <PhoneIcon />,
  email: <MailOutlineIcon />
}

const ContactLink = ({variant, color, style}) => {
  const theme = useTheme()
  const { text, href } = data[variant]

  const textColor = color === 'primary'
    ? theme.palette.primary.dark
    : theme.colors.white

  const styles = {
    display: 'flex',
    alignItems: 'center',
    color: textColor,
    whiteSpace: 'nowrap',
    ...style
  }

  return (
    <Link
      style={styles}
      href={href}
    >
      {iconVariant[variant]}
      <span style={{marginLeft: 16}}>{text}</span>
    </Link>
  )
}

ContactLink.defaultProps = {
  variant: 'email',
  color: 'primary'
}

export default ContactLink
