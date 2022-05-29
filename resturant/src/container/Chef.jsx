import React from 'react';
import { images } from '../constants';
import './Chef.css';

const Chef = () => (
  <>
  <div className=" app__bg">
    <div className="  flex__center " id="chef">
      <div className="specialMenu-title">
        <h1 className="headtext__cormorant">Chef&apos;s Word</h1>
      </div>
      </div>
      <div className="chef">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="header_img" />
      </div>
      <div className="sub__heading app__wrapper_info">
        <div className="heading"><h1 className="headtext__cormorant">What We Believe In</h1></div>
        <div className="para_content">
        <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
           <p className="p__opensans">Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.</p>
          <p className="p__opensans"> Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu.</p>
          <p className="p__opensans">  Congue Iaculis Integer Curabitur Semper Sit Nunc.</p></div>
        
        <div className="app__chef-sign">
        <p className="p__opensans name">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
      </div>
      </div>
</div>
  
  </>
);

export default Chef;
/* 
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef; */