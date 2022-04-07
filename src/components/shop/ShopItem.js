import { useEffect, useState } from "react"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
const ShopItem = ({ item, selected = false, navigate, idx}) => {

    const [hovering, setHovering] = useState(false)
    const [loaded, setLoaded] = useState(true)

    const container = {
        hidden: { 
            y: -20
         },
        show: {
          y: 0,
          transition: {
            duration: 0.5,
            delay: idx * 0.12,
            delayChildren: 8,
          }
        },
        exit: {
            y: -20
        }
      }

    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {

        if (inView) {
            animation.start(`show`)

        }
    }, [item, animation, inView, loaded])

    return (
        <div className="flex flex-col">
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={animation}
                exit="exit"
                whileHover={{ scale: 1.02, transition: {duration: 0.2, ease: `easeInOut`} }}
                whileTap={{ scale: 0.99 }}
                onMouseOver={() => setHovering(true)}
                onMouseOut={() => setHovering(false)}
                onClick={() => navigate(`/shop/${item.id}`)}
                className={`h-96 rounded-lg shadow-md mb-4 transition-colors duration-100 ease bg-gray-300 ${loaded && `animate-pulse`}`}>
                    <motion.img 
                        src={item.download_url}
                        alt={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: loaded ? 0 : 1 }}
                        transition={{ opacity: { delay: idx * 0.19, duration: 0.2 } }}
                        className={`rounded-lg w-full h-full object-cover`}
                        onLoad={() => setLoaded(false)}
                        />
            </motion.div>

            <h5 className="text-lg">Product Name</h5>

            <p className="text-sm text-sky-400">Cotton, polyester</p>
            
            <p>$65</p>
        </div>
    )
}

export default ShopItem