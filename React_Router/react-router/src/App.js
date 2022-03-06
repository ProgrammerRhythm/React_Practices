
import React, { Component }  from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import About from './components/About/About';

function App() {
 
  return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about/:id" element={<About />} />
     <Route path="/home" element={<Home />} />
     <Route path="*" element={<Nomatch/>} />
   </Routes>
  );
}

export default App;
