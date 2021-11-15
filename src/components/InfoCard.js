import { motion } from 'framer-motion'

const InfoCard = () => {
    const variants = {
        hidden: {
            y: -20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 0.5 }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }

    return (
        <motion.div
            variants = {variants}
            initial="hidden"
            animate = "visible"
            exit = "exit"
            className="w-1/2 justify-start shadow-2xl bg-gray-300 border-2 border-gray-300 rounded-xl p-4 px-6">
            <h1 className="text-3xl text-gray-800 pb-2">Content</h1>
            <p className = "text-gray-700 pb-2">Proident nulla ullamco pariatur enim nulla laboris. Sit elit duis irure aliqua est fugiat reprehenderit pariatur laboris ea. Voluptate elit in nostrud labore duis ea id magna ea adipisicing anim.</p>
            <p className = "text-gray-700">Proident nulla ullamco pariatur enim nulla laboris. Sit elit duis irure aliqua est fugiat reprehenderit pariatur laboris ea. Voluptate elit in nostrud labore duis ea id magna ea adipisicing anim.</p>
        </motion.div>
    )
}

export default InfoCard