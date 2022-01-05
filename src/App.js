import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Hats from './pages/hats/hats.component';

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/hats' element={<Hats />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
