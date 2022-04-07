import React from 'react'
import './sam.css'
import { motion } from 'framer-motion'
import InfoCard from '../../components/InfoCard'
import Shop from '../../components/shop/Shop'
import CardContainer from '../../components/CardContainer'

const Sam = ({items, isLoading}) => {


    const getClasses = () => {
        let arr = [
            `h-screen`
        ]

        return arr.join(` `)
    }

    const containerVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5}
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }


    const containerClass = getClasses()

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={containerClass}>
            <div className={`h-full flex flex-row space-x-8 p-8`}>
                <section className="flex-1 space-y-12">
                    <section outline className="relative flex w-full h-1/2 rounded-xl shadow-2xl" style = {{ background: items ? `url('${items[2]?.download_url}') center center no-repeat` : `inherit` }}>
                        <span className="absolute w-36 h-36 border-4 border-gray-200 bg-gray-800 rounded-full top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </section>
                    <h1 className="text-8xl text-gray-200 text-center">
                        Samuel Britt
                    </h1>
                    <section>
                        <Shop outline items={items} isLoading={isLoading}/>
                    </section>
                </section>
            </div>
        </motion.div>
    )
}
export default Sam