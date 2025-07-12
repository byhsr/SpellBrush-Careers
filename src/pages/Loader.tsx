import { AnimatePresence, motion } from "motion/react"

const Loader = () => {
  return (
    <AnimatePresence>
    <motion.div 
    
      animate={{ opacity:  1 }}
      exit={{opacity:0}}
  transition={{ duration: 1 }}
    className="fixed inset-0 bg-amber-600">
      
    </motion.div >
    </AnimatePresence>
  )
}

export default Loader
