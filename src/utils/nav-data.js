const navData = [
  {
    id: 0,
    name: 'Home',
    path: '/home',
    page: 'Home'
  },
  {
    id: 1,
    name: 'About',
    path: '/about',
    page: 'About'
  },
  {
    id: 2,
    name: 'Services',
    path: '/services',
    page: 'Services'
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact',
    page: 'Contact'
  }
]

const servicePages = [
  {
    id: 0,
    name: 'Electrical',
    path: '/electrical',
    page: 'Electrical'
  },
  {
    id: 1,
    name: 'Plumbing',
    path: '/plumbing',
    page: 'Plumbing'
  },
  {
    id: 2,
    name: 'Maintenance',
    path: '/maintenance',
    page: 'Maintenance'
  },
  {
    id: 3,
    name: 'Construction',
    path: '/construction',
    page: 'Construction'
  }
]

const linkSize = {
  margin: .5,
  width: 8,
  height: 2.5,
  scoreWidth: 2.5,
  scoreThickness: .2
}

export {
  navData, linkSize, servicePages
}
