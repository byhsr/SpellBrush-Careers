import { motion} from "motion/react"

import { useState, useRef, useEffect } from "react"
import AiReseacher from "../../imgs/Ai-researcher.png"
import Aibg from "../../imgs/Airesearch-bg.png"

const AiResearch= () => {
  const [read, setRead] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)



 useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const onScroll = () => {
    const progress = el.scrollTop    
    if(progress>300){
      setRead(true)
    }
  };
  el.addEventListener('scroll', onScroll);

  return () => el.removeEventListener('scroll', onScroll);
}, []);




  return (
    <div 
    style={{ backgroundImage: `url(${Aibg})` }}
    className="bg-[#E0F0F2] rounded h-full w-full font-DotGothic text-blue-950">

       <div className=" p-3 absolute top-0 lg:fixed lg:inset-22 lg:top-8 
      ring-1 ring-white/25  backdrop-blur-[65px] border  border-white/50 shadow-2xl overflow-y-auto lg:overflow-hidden h-[400vh]
       lg:h-auto shadow-black/10 bg-white/30 flex flex-col gap-4    lg:gap-0 lg:flex-row rounded ">

        <div className="lg:w-[40%] w-full h-[1000px] lg:h-full  lg:static z-5 flex flex-col bg-zinc-100/70   rounded lg:rounded-r-none items-center   ">
          <div className=" h-[60%] p-2 "><img className="rounded h-[90%]" src={AiReseacher} alt="" /><h1 className="text-2xl lg:text-3xl text-blue-950 my-4 font-DotGothic font-bold">AI Anime Researcher</h1>
            <hr />
          </div>

          <div className=" px-10 h-[40%] w-[100%]  mt-3 flex gap-3">
            <div className="flex-1 h-full   font-DotGothic text-blue-950 rounded space-y-5 pt-6 ">

              <div>
                <h6 className="font-bold text-lg">Location</h6>
                <p> Tokyo, San Francisco</p>
              </div>

              <div>
                <h6 className="font-bold text-lg">Employement type</h6>
                <p>Full time</p>
              </div>

              <div>
                <h6 className="font-bold text-lg">Department</h6>
                <p>Games Team</p>
              </div>

            </div>


            <div className="flex-1 flex flex-col pt-4 justify-between rounded h-full pb-4 ">
              <div>
                {/* <h6>Skills</h6>
                <p>Typescript , React</p> */}
              </div>
             <div className="self-end ">
                  <button className={`text-black bg-[#F0555D] px-7 py-2 rounded-3xl  ${read? 'lg:block' : 'lg:hidden'} ` }>Apply now</button>
                </div>


            </div>
          </div>
        </div>


{/* right */}
        <motion.div
        ref={scrollRef}
       className="w-full lg:w-[60%]  relative h-full bg-zinc-100/70 rounded rounded-l-none overflow-y-hidden lg:overflow-y-auto  
        space-y-10 p-8 50">
          <div className="space-y-3 font-DotGothic" >
            <h3 className="text-2xl font-bold ">About Us</h3>
            <p className="px-2 lg:px-10  text-lg">
              Here at Spellbrush, we're passionate about making a good anime game.

              We also happen to be the world's leading generative AI studio — we're the team behind niji・journey.
              We are currently investigating how AI can be used to help human artists perform masterpieces in the most complex medium of our times: videogames.

              Our games are characterized by a no-compromise approach to well-balanced gameplay married to a truthful love of visual arts.
              If you love turn-based tactics games, please consider applying!
            </p></div>

          <div className="space-y-6.5 font-DotGothic ">
            <h2 className="text-2xl font-bold ">The Research Role:</h2>
            <p className="px-2 lg:px-10  text-lg ">We're looking for an experienced AI Researcher to join our team and help us push the boundaries of AI and anime. You'll design and develop 
                large-scale diffusion models with a primary focus on images, and secondary focus on other modalities like 3d, text, video and audio.</p>
               
             
          </div>

        
           <div className="space-y-9.5 font-DotGothic">
                        <h3 className="text-2xl font-bold " >You may be a good fit if:</h3>
                        <div className="px-2 lg:px-10  space-y-10">
                            <ul className="space-y-9.5 px-4 lg:px-10   text-lg list-none list-inside ">
                              
                                <li className="  space-y-2.5">

                                    <span className=" font-bold">You love anime and the anime aesthetic</span>
                                    <span className="block">
                                   This one of the only labs in the world where you can combine your expertise on anime and deep learning to work on state-of-the-art anime models.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You understand diffusion, or can get up to speed quickly.</span>
                                    <span className="block">
                                   We're looking for experienced researchers who aren't afraid of jumping headfirst into experimenting and designing massive models.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">The anime aesthetic resonates with you.</span>
                                    <span className="block">
                                   It's no secret – we're huge anime enthusiasts, and our work focuses on the anime aesthetic. 
                                   Your work will enable millions of users to partake in an evolving creative movement.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You're proficient in Pytorch (and maybe JAX too)</span>
                                    <span className="block">
                                    We have a very large Pytorch codebase, and an equally large JAX codebase for large-scale TPU training.
                                    </span>
                                    
                                     
                                </li>
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You enjoy a tight loop between research and production.</span>
                                    <span className="block">
                                 We pride ourselves on getting models from the lab into production quickly. Our research team works closely with our
                                 internal studio to both develop game-ready models, and deploy regular quality updates to niji・journey.
                                    </span>
                                    
                                     
                                </li>
                                  <li className="  space-y-2.5">

                                    <span className="font-bold ">You're comfortable working on small, fast-paced teams</span>
                                    <span className="block">
                                We currently have a team of four on AI. You'll be working closely alongside some of the best AI researchers in the world, on the literal best image model in the world.

We also believe in the unmatched speed of in-person teams, and prefer on-site collaboration in either our primary research office in Tokyo (downtown Akihabara), 
or San Francisco. Visa sponsorships are available.
                                    </span>
                                    
                                     
                                </li>
                               
                            </ul>
                        </div>
                        </div>
        </motion.div>





        {/* right */}


      </div>

    </div>
  )
}

export default AiResearch
