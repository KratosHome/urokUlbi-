import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Notfound from './pages/NotFound';
import Postpage from './pages/PostPage';

const Approuter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route path="*" element={<Notfound />} />
            <Route exact path="/posts/:id" element={<Postpage/>} />
        </Routes>
    );
}

export default Approuter;
