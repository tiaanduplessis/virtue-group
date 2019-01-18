import React from 'react'

import NavbarMenu from './NavbarMenu'
import Logo from './Logo'

import colors from '../utils/colors'

const Navbar = () => <nav>

  <Logo compact={true}/>

  <NavbarMenu/>

  <style jsx>{`
    nav {
      position: absolute;
      top: 0;
      left: 0;
      height: 4.5em;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5em 1em;
      box-shadow: 0 -15px 25px 5px ${colors.grey};
      z-index: 1;
    }
  `}</style>
</nav>



export default Navbar
