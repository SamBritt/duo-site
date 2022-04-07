import { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";

const Nav = () => {
    const [scrolling, setScrolling] = useState(false)
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
          let currentPosition = window.pageYOffset
          if (currentPosition > scrollTop) {
            setScrolling(false)
          } else {
            setScrolling(true)
          }
          setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
        }
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
      }, [scrollTop])
    

    return (
        <nav className={`fixed w-full p-12 pt-4 z-30 transition-spacing ease duration-500 ${scrollTop === 0 ? `px-12` : `px-14`}`}>
        <ul className={`flex flex-row justify-between gap-4 rounded-full p-8 transition-colors ease duration-500 ${scrollTop === 0 ? `bg-transparent text-gray-900` : `bg-gray-100 opacity-95 shadow-md`}`}>
          <div className='flex flex-row items-center gap-8'>
            <li className='text-gray-800'>
              <Link to="/">Main</Link>
            </li>

            <li className='text-gray-800'>
              <Link to="/shop">Shop</Link>
            </li>
          </div>
          <div>
            <input type="text" className={`rounded-full h-8 px-4 transition-all ease duration-400 ring ring-gray-200 focus:outline-none focus:ring focus:ring-sky-200`} />
          </div>
        </ul>
      </nav>
    )
}

export default Nav