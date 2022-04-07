import { useState } from "react/cjs/react.development"
import { AnimatePresence, motion } from "framer-motion";

const SingleItemGallery = ({src}) => {
    const [loaded, setLoaded] = useState(true)
    const [items, setItems] = useState([
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
    ])
    return (
        <div className="overflow-x-auto flex flex-row justify-between h-full gap-1">
            {
                items.map((item) => (
                    <div key = {item.id} 
                    className={`flex-shrink-0 h-52 w-52 md:h-60 sm:w-1/2 lg:w-1/4 shadow-lg bg-gray-300 ${loaded && `animate-pulse`}`}>
                        <motion.img 
                            src={src}
                            alt={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: loaded ? 0 : 1 }}
                            transition={ { opacity: { delay: 0.5, duration: 0.4 } }}
                            className={`w-full h-full object-cover`}
                            onLoad={() => setLoaded(false)}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SingleItemGallery