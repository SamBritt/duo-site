import './App.css';
import { useState } from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Home,
  Us,
  Kat,
  Sam
} from './pages/index'
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation() 

  return (
    <div className="main bg-gray-900 overflow-y-scroll">
      <nav>
        <ul className="flex flex-row w-full justify-evenly">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/us">Us</Link>
          </li>
          <li>
            <Link to="/kat">Kat</Link>
          </li>
          <li>
            <Link to="/sam">Sam</Link>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/kat" element={ <Kat /> } />
          <Route path="/sam" element={<Sam />} />
          <Route path="/us" element={<Us />} />
        </Routes>
      </AnimatePresence>
  </div>
  );
}

export default App;
