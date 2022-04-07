
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const CardContainer = ({ children, outline = false }) => {
    const variants = {
        hidden: {
            x: 20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delayChildren: 0.75, duration: 0.5 }
        },
        exit: {
            x: 20,
            opacity: 0,
            transition: { ease: `easeIn` }
        },
    }

    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start(`visible`)
        }
    }, [animation, inView])

    return (
        <motion.div
            ref={ref}
            variants = {variants}
            initial="hidden"
            animate={animation}
            exit = "exit"
            className={`justify-start shadow-2xl ${outline ? `bg-transparent` : `bg-gray-300`} border-2 border-gray-300 rounded-xl p-6 px-10`}>
                { children }
        </motion.div>
    )
}
export default CardContainer