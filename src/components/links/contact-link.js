import React, { Fragment } from 'react'

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
  const { text, href } = data[variant]
  const theme = useTheme()

  const textColor = color === 'primary' ? (
    theme.palette.primary.dark
  ) : (
    theme.colors.white
  )

  const styles = {
    display: 'flex',
    alignItems: 'center',
    color: textColor,
    whiteSpace: 'nowrap',
    ...style
  }

  const icon = iconVariant[variant]

  const content = (
    <Fragment>
      {icon}
      <span style={{marginLeft: 16}}>{text}</span>
    </Fragment>
  )

  return (
    <Link
      style={styles}
      href={href}
    > {content}
    </Link>
  )
}

ContactLink.defaultProps = {
  variant: 'email',
  color: 'primary'
}

export default ContactLink
