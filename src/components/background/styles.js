const backgroundStyles = {
  pageContainer: {
    minWidth: '100vw',
    minHeight: '100vh'
  },
  background: {
    position: 'fixed',
    minHeight: '100vh',
    zIndex: -1,
    backgroundColor: '#e6e6e6'
  },
  bottomImage: {
    position: 'fixed',
    bottom: 0,
    zIndex: -1,
    height: 200
  },
  pageContent: {
    minHeight: 'calc(100vh - 86px)',
    paddingTop: 70,
    zIndex: 2
  }
}

export default backgroundStyles
