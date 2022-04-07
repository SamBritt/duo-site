import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home
} from './pages/index'
import {motion, AnimatePresence} from 'framer-motion';
import axios from 'axios'
import Shop from './components/shop/Shop';
import ShopItem from './components/shop/ShopItem';
import SingleItem from './components/shop/SingleItem';
import Nav from './components/Nav';

function App() {
    const location = useLocation() 

    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        const result = await axios(`https://picsum.photos/v2/list?limit=12`)
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
    }
    fetchData()
  }, [])


  let navigate = useNavigate()
  
  return (
    <div className='min-h-screen overflow-y-scroll transition-all duration-300 ease-in-out bg-gray-100'>
      <Nav/>

      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home navigate={navigate}/>} />
          <Route path="/shop" element={<Shop outline items={items} isLoading={isLoading} navigate={navigate}/>}/>
          <Route path="/shop/:shopItemId" element={<SingleItem/>} />
        </Routes>
      </AnimatePresence>

      <footer className='grid grid-cols-4 mt-16 p-12 text-sm'>
        <div className='p-4'>
          <h3 className='font-semibold mb-2'>About</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis doloribus necessitatibus, is vero optio similique quis aspernatur esse. 
          </p>
        </div>

        <div className='p-4'>
          <h3 className='font-semibold mb-2'>Author</h3>
          <p>Sam Britt</p>
        </div>

        <div className='p-4'>
          <h3 className='font-semibold mb-2'>Email</h3>
          <p><a href="mailto:sam.britt2@yahoo.com">sam.britt2@.com</a></p>
        </div>

        <div className='p-4'>
          <h3 className='font-semibold mb-2'>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
  </div>
  );
}

export default App;
