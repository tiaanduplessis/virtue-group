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


export {
  cardStyles,
  expandingCardStyles
}
