import {motion, AnimatePresence } from 'framer-motion';


export const ResponsiveMenu = ({open}) => {
  return  <AnimatePresence mode='wait'>
    {
        open && (
          <motion.div
            initial={{ opacity: 0 , y:-100}}
            animate={{ opacity: 1 ,y:0}}
            exit={{ opacity: 0 ,y:-100}}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
          <div className='text-xl   bg-[#43A046] text-black py-5 m-5 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10'>
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonial</li> 
                <li>FAQ</li>  
            </ul>
          </div>
          </motion.div>
           )
    }
    </AnimatePresence>

};
export default ResponsiveMenu;