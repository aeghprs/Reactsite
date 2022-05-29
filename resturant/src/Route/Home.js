import React from 'react'
import  Navbar  from '../components/Navbar/Navbar';
import  Header  from '../container/Header';
import  SpecialMenu  from '../container/SpecialMenu';
import  Chef  from '../container/Chef';
import  AboutUs  from '../container/AboutUs';
import  Footer from '../container/Footer';
import FindUs from '../container/FindUs';
const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <SpecialMenu/>
        <Chef/>
        <AboutUs/>
        <FindUs/>
        <Footer/>
    </>
  )
}

export default Home;