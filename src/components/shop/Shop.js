import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import ShopItem from "./ShopItem"

const Shop = ({ navigate, isLoading, items, outline = false }) => {
    

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

     return (
        <motion.main 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-12 mt-24">
            <div className="flex flex-row space-x-8">
                <section className="w-full">
                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
                        <AnimatePresence>
                            {
                               isLoading ? (<h1>Loading...</h1>) : 
                               (
                                    items.map((item, idx) => (
                                    <ShopItem navigate={navigate} key = {item.id} idx={idx} item={item}/>
                                    ))
                                )
                            }
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </motion.main>
     )
}

export default Shop