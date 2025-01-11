// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImagesPage from './pages/ImagesPage';
import MainPage from './pages/Criptograma';
import Cifras from './pages/Cifras';
import Test from './pages/test';
import Home from './pages/Home'
import Tradutor from './pages/Tradutor';
import Coletanea from './pages/Coletanea';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/criptograma" element={<MainPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/cifras" element={<Cifras/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/tradutor" element={<Tradutor/>}/>
        <Route path ="/coletânea" element={<Coletanea/>}/>
      </Routes>
    </Router>
  );
}

export default App;
