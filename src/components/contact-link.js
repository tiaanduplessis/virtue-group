import React from 'react'
import Link from '@material-ui/core/Link'
import { useTheme } from '@material-ui/styles'

const data = {
  phone: {
    content: '+27 55 555-5555',
    href: 'tel:+27555555555'
  },
  email: {
    content: 'info@virtuegroup.co.za',
    href: 'mailto:info@virtuegroup.co.za'
  }
}

const ContactLink = ({variant, color, style}) => {
  const { content, href } = data[variant]
  const theme = useTheme()

  const textColor = color === 'primary' ? (
    theme.palette.primary.dark
  ) : (
    theme.colors.white
  )

  const styles={
    color: textColor,
    whiteSpace: 'nowrap',
    ...style
  }

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
