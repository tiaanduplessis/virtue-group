const navbarStyles = theme => ({
  appbar: {
    ...theme.container,
    backgroundColor: theme.palette.primary.dark
  },
  mobileAppbar: {
    paddingRight: 20,
    backgroundColor: theme.palette.primary.dark
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minHeight: 70
  },
  tabs: {
    padding: 0
  },
  tab: {
    minWidth: 92,
    padding: 0
  },
  label: {
    fontSize: 14,
    letterSpacing: 1.5
  },
  indicator: {
    height: 3,
    backgroundColor: theme.colors.white
  },
  selected: {
    cursor: 'pointer',
    pointerEvents: 'none'
  },
  list: {
    minWidth: 200,
  },
  selectedLink: {
    fontWeight: 700
  },
  iconButton: {
    color: theme.colors.white
  },
  mobileNavbar: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    height: 48
  },
  title: {
    color: theme.colors.white,
    fontWeight: 400,
    textTransform: 'capitalize',
    paddingLeft: 15
  }
})

export {
  navbarStyles
}
