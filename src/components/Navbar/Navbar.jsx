import React, {useRef} from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const  [menu,setMenu] = useState();
  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
   const closeMenu = () => {
     menuRef.current.style.right = "-350px";
   };

  return (
    <div id="navbar" className="navbar">
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>

          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>

          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contactme'>
            {" "}
            <p onClick={() => setMenu("contact")}>Contact Me</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      {/* <div className="nav-connect">Connect With Me</div> */}
    </div>
  );
}

export default Navbar
