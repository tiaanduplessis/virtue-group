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
    name: 'Electrical',
    path: '/electrical',
    page: 'Electrical'
  },
  {
    id: 3,
    name: 'Plumbing',
    path: '/plumbing',
    page: 'Plumbing'
  },
  {
    id: 4,
    name: 'Maintenance',
    path: '/maintenance',
    page: 'Maintenance'
  },
  {
    id: 5,
    name: 'Construction',
    path: '/construction',
    page: 'Construction'
  },
  {
    id: 6,
    name: 'Contact Us',
    path: '/contact-us',
    page: 'Contact'
  }
]

const linkSize = {
  margin: .5,
  width: 8,
  height: 2.5,
  scoreWidth: 2.5,
  scoreThickness: .2
}

const findActiveLink = path => {
  return navData.find(item => item.path === path)
}

export { navData, linkSize, findActiveLink }
