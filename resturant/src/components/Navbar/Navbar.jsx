import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link } from 'react-router-dom';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav>
    <div className="navbar">
      <div className='navbar_logo'>
      <img src={images.gericht} alt='logo' />
      </div>
    <ul className='navbar_links'>
      
      <li className='p__opensans'><Link to='/'>Home</Link></li>
      <li className='p__opensans'><Link to='/about'>About</Link></li>
      <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
      <li className='p__opensans'><Link to='/chef'>Chef</Link></li>
      <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
    </ul>
    <div className='navbar_login'>
    <a href='#login'className='p__opensans'>Login/Register</a>
    <a href='/'className='p__opensans'>Book table</a>
    </div>

    <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </nav>
  );

          }  ;

export default Navbar;
