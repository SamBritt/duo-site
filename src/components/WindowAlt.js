import { motion } from 'framer-motion'
import { useState } from 'react'
import frame from '../images/evil-frame.png'
import sun from '../images/moon-1.png'
import hill3 from '../images/mtn-back.png'
import hill2 from '../images/mtn-mid.png'
import hill1 from '../images/mtn-front.png'
import sky from '../images/dark-bg.png'
import {toLower} from 'lodash'
const WindowAlt = ({ navigate, name, current }) => {
    const [hovering, setHovering] = useState(false)

    let fullName = name === `sam` ? `Samuel Britt` : `Katherine Knowles`

    const variants = {
        sun: {
            in: {
                y: -10
            },
            out: {
                y: 80
            }
        },
        hill1: {
            in: {
                x: -20,
                transition: { ease: `easeIn` }
            },
            out: {
                x: 0
            }
        },
        hill2: {
            in: {
                x: 10,
                transition: { ease: `easeIn` }
            },
            out: {
                x: 0
            }
        },
        hill3: {
            in: {
                y: -20,
                transition: { ease: `easeIn` }
            },
            out: {
                y: 0 
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
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}>
                <motion.img
                    animate={hovering ? variants.sun.in : variants.sun.out}
                    src={sun}
                    alt="hill"
                    className="absolute z-30 object-contain h-full" />
                <motion.img
                    animate={hovering ? variants.hill3.in : variants.hill3.out}
                    src={hill3}
                    alt="hill"
                    className="absolute z-30 object-contain h-full" />
                <motion.img
                    animate={hovering ? variants.hill2.in : variants.hill2.out}
                    src={hill2}
                    alt="hill"
                    className="absolute z-30 object-contain h-full" />
                <motion.img
                    animate={hovering ? variants.hill1.in : variants.hill1.out}
                    src={hill1}
                    alt="hill"
                    className="absolute z-40 object-contain h-full" />
                <motion.img 
                    src={sky} 
                    alt="hill" 
                    className="absolute z-20 object-contain h-full" />
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

export default WindowAlt