import React, { useEffect } from 'react'
import './home.css'
import { motion } from 'framer-motion'

const Home = ({ navigate }) => {

    useEffect(() => {
        console.log('ran')
        window.scrollTo(0, 0)
    }, []);
    

    const containerVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.3}
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }

    return (
            <motion.main 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center items-center h-screen">
                <div className='flex flex-col items-center gap-y-4'>
                    <h1 className='text-8xl font-semibold'>TRINITY</h1>
                    <button onClick = {() => navigate('/shop')} className='w-1/2 h-12 border border-solid border-black rounded-lg hover:bg-gray-200'>Come with me</button>
                </div>
            </motion.main>
    )
}
export default Home