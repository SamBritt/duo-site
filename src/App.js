import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import {
  Home,
  Us,
  Kat,
  Sam
} from './pages/index'
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation() 
  let currentPath = location.pathname.substr(1, location.pathname.length)

  const [current, setCurrent] = useState(``)

  useEffect(() => {
    return () => {
      console.log(currentPath)
    }
  })

  const isCurrent = name => currentPath === name

  
  return (
    <div className={`main overflow-y-scroll ${isCurrent(`kat`) ? `transition-all duration-300 ease-in-out bg-gray-400`: `transition-all duration-300 ease-in-out bg-gray-800`}`}>
      <nav>
        <ul className="flex flex-row w-full justify-evenly py-4">
          <li className={`${isCurrent(`kat`) ? `text-gray-800` : `text-gray-200` }`}>
            <Link to="/">Main</Link>
          </li>

          <li className={`${isCurrent(`kat`) ? `text-gray-800` : `text-gray-200` }`}>
            <Link to="/us">Us</Link>
          </li>

          <li className={`${isCurrent(`kat`) ? `text-gray-800` : `text-gray-200` }`}>
            <Link 
              to="/kat"
              onClick={() => setCurrent(`kat`)}>Kat</Link>
          </li>

          <li className={`${isCurrent(`kat`) ? `text-gray-800` : `text-gray-200` }`}>
            <Link 
              to="/sam"
              onClick={() => setCurrent(`Sam`)}>Sam</Link>
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
