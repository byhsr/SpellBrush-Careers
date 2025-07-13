
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { jobContext } from "./HomeLayout";
import { useContext, useRef , useEffect } from "react";
import JobCard from "../Components/JobCard";
import frontEnd from "../imgs/frontend-eng.png"
import aiInfra from "../imgs/ai-infra.jpg"
import gameProgrammer from "../imgs/game programmer-baner.jpg"
import swe from "../imgs/swe.jpg"
import llmbanner from '../imgs/llmbanner.jpg'
// import ScrollEffect from "../Components/ScrollEffect";

const JobList = () => {
    const jobCntxt = useContext(jobContext)
    if(!jobCntxt) throw new Error('used outside context')
    const {showCards, setShowCards} = jobCntxt
    const scrollRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };
  
  el.addEventListener("wheel", handleWheel, { passive: false });
  return () => el.removeEventListener("wheel", handleWheel);
},[showCards] );


  return (
    <div>
        
      <AnimatePresence>
     { showCards && <motion.div 
     
     key="job-list"
     initial={{y: '100%' }}
     animate= {{y:0}}
     exit={{y: '100%' , opacity: 0 }}
     transition={
     
      {duration:0.4 , ease: easeInOut}


      }

      // h-screen w-full
     className="bg-zinc-900 border-zinc-800 border-4 backdrop-blur-3xl absolute inset-0 lg:inset-8 top=5 rounded-2xl z-50 flex justify-center items-center 
       ">
        <p className="absolute top-0 text-[200px] opacity-45 font-swomp-Outline z-10 text-[#F0555D]">Spell Brush</p>
        <p className="absolute bottom-0 text-[200px] opacity-45 font-swomp-Outline z-10 text-[#F0555D]">Careers</p>
        <p onClick={()=>setShowCards(p => !p)} className="fixed z-50 top-4 left-6 bg-[#F0555D] text-white px-3 py-1 rounded hover:scale-105 transition-scale ease-in duration-75">close</p>


        <div className="flex flex-col  relative w-[90%] lg:w-[100%] h-[90%] ">

       
        <div 
         ref={scrollRef}
        className="space-x-3 flex  bg-transparent rounded-xl px-4
         overflow-x-auto whitespace-nowrap scrollbar-hide h-full scroll-smooth relative z-10  items-center " >
          <JobCard  id='frontend' imgSrc={frontEnd} jobTitle="Front-End Eng (anime)" jobDes="remote/san-francisco"/>
          <JobCard  id='llm-eng' imgSrc={llmbanner} jobTitle="LLM Engineer" jobDes="san-francisco"/>
          <JobCard id='Ai-Infra' imgSrc={aiInfra}  jobTitle="AI InfraStructure Engineer"  jobDes="remote/san-francisco"/>
          <JobCard id='game-programmer' imgSrc={gameProgrammer}  jobTitle="Game Programmer (unity)"  jobDes="san-francisco"/>
          <JobCard id='Ai-research' imgSrc={swe}  jobTitle="Ai Anime Researcher"  jobDes="remote/san-francisco"/>
          {/* <JobCard  id='ai-helper' /><JobCard  id='ai-hel' /><JobCard  id='ai-helper' /> */} 

          </div>
            
            <div 
       
        className=" fixed bottom-15 right-9 z-20 text-lg text-[#F0555D] flex justify-end">
          {/* <ScrollEffect/> */}
          <p>scroll on cards to explore jobs</p>
        </div>
         </div>


        </motion.div>

          }
          </AnimatePresence>
    </div>
  )
}

export default JobList
