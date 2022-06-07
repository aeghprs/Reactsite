import React from 'react'
import  Navbar  from '../components/Navbar/Navbar';
import  SpecialMenu  from '../container/SpecialMenu';
import Footer from '../container/Footer';
const Menu = () => {
  return (
    <div>
       <Navbar/>
        <SpecialMenu/>
        <Footer/>
    </div>
  )
}

export default Menu
