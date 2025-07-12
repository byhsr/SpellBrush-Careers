import { easeInOut, motion, spring } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { jobContext } from "../pages/HomeLayout";
import "./Styles/JobCard.css"

import cardb from "../imgs/22.png"

type jobCardPropType = {

    id : string, 
    imgSrc : string,
    jobTitle : string, 
    jobDes : string

}

const JobCard= ({ id ,imgSrc, jobTitle, jobDes } : jobCardPropType) => {

  const [hoveredCard , setHoveredCard] = useState<boolean>(false) 

  const jobCntxt = useContext(jobContext)!
  if(!jobCntxt) throw new Error()
    const {setShowCards , flipped , setFlipped} = jobCntxt
    const isFlipped = flipped?.[id] ||  false

  const handleClick  = ()  => {
    console.log('handleClicked', isFlipped)
       setFlipped( prev => ({ ...prev , [id] : !prev?.[id]}))
  }
       
  



  return (
    <div className="flip w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] inline-block  shrink-0 cursor-pointer" >
      <motion.div
        key={id}
        whileHover={{y:-10}}
        className="w-full h-full relative preserve-3d"
        initial={{rotateY: 180}}
        animate={{ rotateY: isFlipped ? 0 : 180 , opacity: 1}}
        transition={{
            y:{
              type:spring,
              stiffness:400
            
            },
              
          
            ease: easeInOut  , duration: 0.7}}
      >
        {/* Front side */}
        <div className="absolute w-full h-full bg-zinc-900 
         text-black font-Mochi flex flex-col items-center text-xl font-bold backface-hidden rounded-xl">
            <div className="h-[85%] w-full  flex flex-col p-4 pb-4 " onClick={handleClick}
            
            >
              <img className="h-[80%] object-cover" src={imgSrc} alt="card image" />
              <div className="py-3"><p className="text-zinc-300 text-lg lg:text-2xl font-DotGothic ">{jobTitle}</p>
              <p className="text-zinc-300 font-DotGothic text-sm lg:text-lg font-light">{jobDes}</p></div>
            </div>

            <Link
            
            onClick={()=> setShowCards(p=> !p)} 
            to={id}
            className="h-[10%] w-[95%] mb-1 rounded-xl p-3 flex font-Reggae justify-end overflow-clip border  bg-[#F0555D] ">
              
                  More Details
            </Link >
       
          
        </div>

        {/* Back side */}
        <motion.div 
        onClick={handleClick}
        onHoverStart={() => setHoveredCard(true)}
        onHoverEnd={() => setHoveredCard(false)}
        transition={{duration:0.3}}
        style={{ backgroundImage : `url(${cardb})`}}
         className="absolute w-full h-full bg-black text-zinc-400 flex items-center 
         justify-center text-xl bg-cover font-bold backface-hidden rotate-y-180 rounded-xl">
       <p 
        
        className={`relative top-30 ${hoveredCard?'opacity-100' : 'opacity-0'} transition-all ease-in duration-400`}>Click anywhere for magic</p> 
        </motion.div>
      </motion.div>
    </div>
  );
};


export default JobCard