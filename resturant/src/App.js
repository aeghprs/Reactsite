import React from 'react';
import Home from './Route/Home'
import About from './Route/About'
import Menu from './Route/Menu'
import Contact from './Route/Contact'
import Chef from './Route/Chef';
import Error from './Route/Error';
import {Routes, Route} from 'react-router-dom'
import './App.css';
const App= () => (
  <> 
   <Routes>
   <Route  path='/' element={    <Home/>}/>
   <Route  path='menu' element={ <Menu />} />
   <Route  path='chef' element={<Chef />} />
   <Route  path='about' element={<About />} />
   <Route  path='contact' element={<Contact />} />
   <Route path='*' element={<Error/>} /> 
 </Routes>    
  </>
);

export default App;


