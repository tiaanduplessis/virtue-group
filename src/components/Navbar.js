import React from 'react'

import NavbarMenu from './NavbarMenu'
import Logo from './Logo'

const Navbar = () => <nav>

  <Logo/>
  <NavbarMenu/>

  <style jsx>{`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5em;
      height: 5em;
    }
  `}</style>
</nav>



export default Navbar
