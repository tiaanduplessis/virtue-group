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

const matchNavItem = path => {
  return navData.find(item => item.path === path)
}

export {
  navData, matchNavItem
}
