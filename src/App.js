import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Hats from './pages/hats/hats.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/hats' element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
