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
  },
  darkCard: {
    backgroundColor: theme.palette.primary.light,
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
