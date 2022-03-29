import React from 'react';
import "./components/styles/app.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Navbar from './components/UI/NavBat/NavBar';
import Notfound from './components/pages/NotFound';
import Approuter from './components/AppRouter';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Approuter/>

    </BrowserRouter>

  );
}

export default App;
