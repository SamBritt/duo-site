import React from 'react'
import './sam.css'
import { motion } from 'framer-motion'
import InfoCard from '../../components/InfoCard'

const Sam = () => {


    const getClasses = () => {
        let arr = [
            `h-screen`,
            `border-r-2`,
            `border-gray-600`,
        ]

        return arr.join(` `)
    }

    const containerVariants = {
        hidden: {
            y: `100vh`,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5}
        },
        exit: {
            y: `100vh`,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }


    const containerClass = getClasses()

    return (
        <motion.div variants = {containerVariants} initial="hidden" animate = "visible" exit = "exit" className={containerClass}>
            <div className={`h-1/2 transition-opacity flex w-full bg-gray-500`}>
            </div>

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