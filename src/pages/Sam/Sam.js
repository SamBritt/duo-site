import React from 'react'
import './sam.css'
import { motion } from 'framer-motion'
import InfoCard from '../../components/InfoCard'

const Sam = () => {


    const getClasses = () => {
        let arr = [
            `h-screen`
        ]

        return arr.join(` `)
    }

    const containerVariants = {
        hidden: {
            x: -20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5}
        },
        exit: {
            x: -20,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }


    const containerClass = getClasses()

    return (
        <motion.div variants = {containerVariants} initial="hidden" animate = "visible" exit = "exit" className={containerClass}>
            <div className={`p-8 bg-gray-800 space-y-12`}>
                <h1 className="text-6xl text-gray-200 text-center">
                    Samuel Britt
                </h1>
                <div className="space-y-12">
                    <div className="flex justify-start">
                        <InfoCard/>
                    </div>
                    <div className="flex justify-end">
                        <InfoCard/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Sam