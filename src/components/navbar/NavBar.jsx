import React from 'react';
import './NavBar.scss';
import {motion} from 'framer-motion';
import SideBar from '../sidebar/SideBar';

const NavBar = () => {
  return (
    <div className='navbar'>
        <SideBar/>
        <div className="wrapper">
            <motion.span>
                Abdelhak

            </motion.span>
            <div className="social">
                <a href=""> <img src="./facebook.png" alt="" /> </a>
                <a href=""> <img src="./instagram.png" alt="" /> </a>
                <a href=""> <img src="./youtube.png" alt="" /> </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar