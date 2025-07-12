import {  motion } from "motion/react";

import { jobContext } from "../pages/HomeLayout";
import { useContext } from "react";



const GrowNav = ({title} : {title: string}) => {
  const jobCtxt= useContext(jobContext)
  if(!jobCtxt) throw new Error ('use context called outside')
    const {setShowCards} = jobCtxt;

  return (
    <motion.button
    onClick={()=>setShowCards(p => !p)}
    whileHover={ {y :-3} }
    className={`bg-[#F0555D] backdrop-blur-2xl border absolute border-white/20 shadow-lg py-2 rounded
       transition-[width] ease-in duration-200`}
    >
      <p className="text-xl font-DotGothic font-bold px-3 text-white">{title}</p>
    </motion.button>
  )

}

export default GrowNav
