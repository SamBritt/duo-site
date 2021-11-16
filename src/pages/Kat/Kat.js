import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import InfoCard from '../../components/InfoCard'

const Kat = () => {

    const getClasses = () => {
        let arr = [
            `h-screen`,
        ]

        return arr.join(` `)
    }
    const containerVariants = {
        hidden: {
            x: 20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5}
        },
        exit: {
            x: 20,
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
                <section className="flex-1 bg-gray-500 rounded-xl">

                </section>
                <section className="flex-1 space-y-12">
                    <h1 className="text-6xl text-gray-800 text-center">
                        Katherine Knowles
                    </h1>

                    <InfoCard/>
                    <InfoCard/>
                </section>
            </div>
            <div className="w-full h-full p-8">
                <InfoCard/>
            </div>
        </motion.div>
    )
}
export default Kat