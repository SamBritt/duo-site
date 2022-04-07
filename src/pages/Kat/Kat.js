import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import InfoCard from '../../components/InfoCard'
import Shop from '../../components/shop/Shop'

const Kat = ({items, isLoading}) => {


    const getClasses = () => {
        let arr = [
            `h-screen`,
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
                    <section className="flex w-full h-1/2 bg-gray-500 rounded-xl" style = {{ background: items ? `url('${items[2]?.download_url}') center center no-repeat` : `inherit` }}>

                    </section>
                    <h1 className="text-8xl text-gray-800 text-center">
                        Katherine Knowles
                    </h1>
                    <section className="flex flex-row space-x-6">
                        <InfoCard
                            heading = {`Journey to a Better Future`}
                            subtext = {`And how to get there.`}
                            text={`Proident nulla ullamco pariatur enim nulla laboris. Sit elit duis irure aliqua est fugiat reprehenderit pariatur laboris ea. Voluptate elit in nostrud labore duis ea id magna ea adipisicing anim.`}/>
                        <InfoCard
                            heading = {`Career in Sustainability`}
                            subtext = {`Text about career in sustainability`}
                            text={`Proident nulla ullamco pariatur enim nulla laboris. Sit elit duis irure aliqua est fugiat reprehenderit pariatur laboris ea. Voluptate elit in nostrud labore duis ea id magna ea adipisicing anim.`}/>
                    </section>
                <section>
                    <Shop items={items} isLoading={isLoading}/>
                </section>
                </section>
            </div>
        </motion.div>
    )
}
export default Kat