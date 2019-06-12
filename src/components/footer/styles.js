const footerStyles = theme => ({
  footer: {
    ...theme.container,
    height: 70,
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    marginTop: 16,
  },
  toolbar: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  }
})

export default footerStyles
