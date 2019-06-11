const footerStyles = theme => ({
  footer: {
    height: 70,
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    marginTop: 36,
    ...theme.container
  },
  toolbar: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  }
})

export default footerStyles
