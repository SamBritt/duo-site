import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleItemGallery from "./SingleItemGallery";
const SingleItem = () => {
    let params = useParams()
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [src, setSrc] = useState(null)
    const [loaded, setLoaded] = useState(true)

    const container = {
        hidden: { 
            opacity: 0, 
            x: -20
         },
        show: {
          opacity: 1,
          x: 0, 
          transition: {
              delay: 0.3,
              duration: 1
          }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: { ease: `easeIn` }
        }
      }

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        
        const fetchData = async () => {
            const result = await axios(`https://picsum.photos/v2/list?limit=12`)
                .then((res) => {
                    let single = res.data.find(item => item.id === params.shopItemId)
                    console.log(single)
                    setItem(single)
                })
        }
        fetchData().then(() => {
            const imageLoader = new Image();

            imageLoader.src = item.download_url;
            imageLoader.onload = () => setSrc(item.download_url)
            
            setLoading(false)
            return imageLoader
        })
    }, [item.download_url, params.shopItemId]);
    
    return(
            <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-3 min-h-screen w-full">
            {!loading && (
                <>
                    <motion.div
                        key={item.id}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="row-span-2 md:col-span-2 w-full">
                        {/* style = {{ background: `url('${src}') no-repeat center center / cover`}}> */}
                        <motion.img 
                        src={item.download_url}
                        alt={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: loaded ? 0 : 1 }}
                        transition={ { opacity: { delay: 0.5, duration: 0.4 } }}
                        className={`w-full h-full object-cover`}
                        onLoad={() => setLoaded(false)}
                        />
    
                    </motion.div>

                    <div className="md:row-span-2 md:col-span-2">
                        <SingleItemGallery item={item} src={src}/>
                    </div>

                    <div className="row-span-3 flex flex-col md:justify-center items-center w-full p-8 xl:p-16">
                        <motion.div 
                            initial={{x: 20, opacity: 0}}
                            animate={{x: 0, opacity: 1, transition: { duration: 1}}}
                            exit={{x: 20, opacity: 0, transition: { ease: `easeIn` }}}
                            className="w-full space-y-4">
                            <div>
                                <h1 className="text-2xl">Product {`${item.id}`}</h1>
                                <p className="text-green-500">Cotton, Polyester</p>
                                <p>$65</p>
                            </div>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam soluta pariatur. Iusto nemo temporibus rerum, asperiores sequi saepe at repellat? Nesciunt mollitia soluta vero eveniet dignissimos sequi repellendus. Labore.</p>
                            
                            <div className="flex space-x-4">
                                <select className="flex-1 p-2 h-12 border border-solid border-gray-300" name="color" id="colors">
                                    <option value="volvo">White</option>
                                    <option value="saab">Black</option>
                                </select>
                                <select className="flex-1 p-2 h-12 border border-solid border-gray-300" name="color" id="colors">
                                    <option value="volvo">sm</option>
                                    <option value="saab">md</option>
                                    <option value="opel">lg</option>
                                    <option value="audi">xl</option>
                                </select>
                            </div>

                            <button className='w-1/2 h-12 border border-solid border-black rounded-lg hover:bg-gray-200'>Inquire</button>
                        </motion.div>
                    </div>
                </>
                    )}
                </div>
    )
}

export default SingleItem