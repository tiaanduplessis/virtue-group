const expandingCardStyles = theme => ({
  paper: {
    background: theme.palette.paper
  },
  toolbar: {
    padding: 0,
    minHeight: 'auto'
  },
  title: {
    marginLeft: 20
  }
})

const cardStyles = theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.paper,
    padding: 24,
    borderRadius: 4,
    boxShadow:
      `0px 1px 3px 0px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 2px 1px -1px rgba(0,0,0,0.12)`
  }
})

const serviceCardStyles = theme => ({
  container: {
    ...theme.container,
    height: '100%'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'uppercase',
    marginTop: 16
  },
  cardDescription: {
    marginTop: 16,
    height: 50,
    overflow: 'hidden',
    fontSize: 16,
    opacity: .6,
    textAlign: 'center'
  },
  button: {
    marginTop: 16,
    backgroundColor: '#009688',
    '& a': {
      textTransform: 'uppercase',
      color: theme.colors.white,
      fontSize: 14
    }
  }
})

export {
  cardStyles,
  expandingCardStyles,
  serviceCardStyles
}
