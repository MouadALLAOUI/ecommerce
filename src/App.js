import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './compenet/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home';
import Produit from './Pages/Produit';
import Contact from './Pages/contact';
import Produitdesc from './Pages/produitdesc';
import './App.css'

function App() {
  return (
    <div className='contain'>
      <MyNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produit' element={<Produit />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Produitdesc' element={<Produitdesc />} />
        </Routes>
      </Router>
    </div>
  )
};
export default App;