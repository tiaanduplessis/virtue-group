const footerStyles = theme => ({
  footer: {
    ...theme.container,
    height: 70,
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    marginTop: 16,
  },
  mobileFooter: {
    ...theme.container,
    height: 'auto',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    marginTop: 16,
  },
  toolbar: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mobileToolbar: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
})

export default footerStyles
