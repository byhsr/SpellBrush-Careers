import { createContext, useContext, useState } from "react"
import { AnimatePresence,  motion } from "motion/react"
import HelloIntro from "../Components/HelloIntro"
import ThreedRender from "../Components/3dRendered"
import WhoWe from "../Components/WhoWe"
import { jobContext } from "./HomeLayout"
import AnimatedWord from "../Components/AnimatedWord"

export const HoverdNijiContext = createContext<boolean>(false)

const AboutUs = () => {

    const ctxt  = useContext(jobContext)
    if(!ctxt) throw new Error('used outside context')
     const {introDone , setIntroDone} = ctxt   
    
    const [hoverNiji, setHoverNiji] = useState<boolean>(false)



    return (
        <HoverdNijiContext.Provider value={hoverNiji}>
            <div className="w-full h-full flex flex-col lg:flex-row gap-2 text-white  p-8 ">
                <div 
                
                className="flex-1 fixed inset-0 z-10 rounded-lg ">

                    <ThreedRender />
                </div>

                {/* left div */}

                <div className=" w-full border  lg:w-[50%] h-[30%] ">
                    <motion.div
                        onMouseEnter={() => setHoverNiji(true)}
                        onMouseLeave={() => setHoverNiji(false)}

                        className=" w-full lg:w-[80%] h-[170px] relative z-5 lg:z-15 
                         text-zinc-400 rounded-4xl flex justify-center  items-center px-7 bg-black">

                        <div className="flex-2 text-sm ">   <p>we are the team behind</p>
                            <div className=" text-2xl lg:text-5xl">Niji . Journey</div></div>

                        <div className=" flex-1 h-[100px] text-4xl mt-3 lg:mt-0 lg:text-5xl font-swomp-Outline">
                            <AnimatedWord text='Make' /><AnimatedWord text='Magic' />
                        </div>

                    </motion.div>

                    <AnimatePresence>
                        {hoverNiji && (
                            <motion.div
                                key="hover-box"
                                initial={{ x: 50, rotate: 90, opacity: 0, scale: 0.2 }}
                                animate={{ x: 0, rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ x: 20, rotate: 270, opacity: 0, scale: 0.1 }}
                                transition={{ duration: 0.3 }}
                                className="border   h-[400px] w-[700px] rounded-2xl fixed top-10 left-3 z-15  pointer-events-none "
                            >
                                <video
                                    src="/Videos/niji--intro.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    // controls // remove if you don’t want playback controls
                                    className="w-full h-auto rounded-xl"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>


                {/* right div */}

                <div className=" w-full lg:w-[50%] h-[90%]  flex flex-col items-end">

                    <div className="h-[50%]">

                    </div>


                    <div className="relative z-15 flex flex-col  h-[70%] lg:h-[50%] w-full lg:w-[70%] px-5">
                     { !introDone &&  <div>

                        
                        <div className="flex-1"><HelloIntro text="Hello Explorer" /></div>


                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{
                            delay:3
                        }}
                        className=" flex font-DotGothic flex-col absolute top-9 ml-5 text-black space-y-1 opacity-55 transition-all ease-in duration-150">
                            <p className="text-lg font-Mochi text-[#F0555D] lg:text-zinc-700">Welcome ! to "spellbrush/careers"</p>
                            <p className="text-[#F0555D] lg:text-black">Are you trying to find perfect opportunity for your talent?</p>
                         <button 
                         onClick={()=> setIntroDone(true)}
                         className="self-end bg-[#F0555D] hover:scale-105 transition-scale ease-in duration-150 text-white px-2 py-1 rounded">Yes i am looking for a job</button>
                        </motion.div>
                        </div>
                        
                        }


                           { introDone &&
                               <div className="flex-2 border rounded-3xl fixed bottom-25 left-5 right-5 lg:static  p-5 text-zinc-400 bg-black  space-y-3">
                            <p className="text-lg">Before You Proceed</p>
                            <WhoWe />
                        </div>
                           }
                      

                    </div>

                </div>
















            </div>
        </HoverdNijiContext.Provider>
    )
}


export default AboutUs
