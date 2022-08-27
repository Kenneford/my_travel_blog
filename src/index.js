import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import TourInfo from './TourInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path='/' element={<App />}>
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/tour-info/:id' element={<TourInfo />} />
        </Routes>
    </HashRouter>
  </React.StrictMode>
);
