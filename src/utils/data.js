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
    name: 'Contact Us',
    path: '/contact-us',
    page: 'Contact'
  }
]

const linkSize = {
  margin: .5,
  width: 9,
  height: 2.7,
  scoreWidth: 3,
  scoreThickness: .25
}

const findActiveLink = path => {
  return navData.find(item => item.path === path)
}

export { navData, linkSize, findActiveLink }
