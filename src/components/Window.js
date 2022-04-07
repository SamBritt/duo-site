import { motion } from 'framer-motion'
import { useState } from 'react'
import frame from '../images/window-border-1.png'
import sun from '../images/sun-1.png'
import hill1 from '../images/hill-1.png'
import hill2 from '../images/hill-2.png'
import hill3 from '../images/hill-3.png'
import sky from '../images/sky-bg.png'
import {toLower} from 'lodash'
const Window = ({ navigate, name, current }) => {
    const [hovering, setHovering] = useState(false)

    let fullName = name === `sam` ? `Samuel Britt` : `Katherine Knowles`

    const variants = {
        sun: {
            animate: {

            }
        },
        hill1: {
            animate: {

            }
        },
        hill2: {
            animate: {

            }
        },
        hill3: {
            animate: {

            }
        },
        frame: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                transition: { ease: `easeIn` }
            },
        },
    }

    return (
        <>
        <div className="flex justify-center h-3/4 mt-8">
            <motion.div 
                className="h-auto w-96 relative justify-center overflow-hidden"
                variants={variants.frame}
                initial={variants.frame.hidden}
                animate={variants.frame.visible}
                exit={variants.frame.exit}
                whileHover={{ scale: 1.03 }}>
                <motion.img animate={hovering ? { y: -10 } : { y: 80 }} transition={{ type: "spring", stiffness: 150 }} src={sun} alt="hill" className="absolute z-30 object-contain h-full" />
                <motion.img animate={hovering ? { y: -10 } : { y: 0 }} src={hill3} alt="hill" className="absolute z-30 object-contain h-full" />
                <motion.img animate={hovering ? { x: 40 } : { x: 0 }} src={hill2} alt="hill" className="absolute z-30 object-contain h-full" />
                <motion.img animate={hovering ? { y: 10 } : { y: 0 }} src={hill1} alt="hill" className="absolute z-40 object-contain h-full" />
                <motion.img src={sky} alt="hill" className="absolute z-20 object-contain h-full" />
                <motion.img
                    onClick={() => navigate(`/${name}`)}
                    src={frame}
                    alt="window-container"
                    className="absolute z-50 object-contain h-full"
                    onMouseOver={() => setHovering(true)}
                    onMouseOut={() => setHovering(false)}
                    onTapCancel={() => console.log('ended')} />
            </motion.div>
        </div>

            <div className="h-1/4">
                <h1 className="text-6xl text-center">{fullName}</h1>
            </div>
        </>
    )
}

export default Window