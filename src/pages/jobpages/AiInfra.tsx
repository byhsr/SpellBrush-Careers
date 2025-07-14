import { motion} from "motion/react"

import { useState, useRef, useEffect } from "react"
import AiInfra1 from "../../imgs/aiInfra.png"

const AiInfra = () => {
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
    style={{ backgroundImage: `url(${AiInfra1})` }}
    className="bg-[#E0F0F2] rounded h-full w-full overflow-y-auto text-blue-950 font-DotGothic">

      <div className=" p-3 absolute top-0 lg:fixed lg:inset-22 lg:top-8 
      ring-1 ring-white/25  backdrop-blur-[65px] border  border-white/50 shadow-2xl overflow-y-auto lg:overflow-hidden h-[440vh]
       lg:h-auto shadow-black/10 bg-white/30 flex flex-col gap-4    lg:gap-0 lg:flex-row rounded ">

       <div className="lg:w-[40%] w-full h-[1000px] lg:h-full  lg:static z-5 flex flex-col bg-zinc-100/70   rounded lg:rounded-r-none items-center   ">
          <div className=" h-[60%] p-2 "><img className="rounded h-[90%]" src={AiInfra1} alt="" /><h1 className="text-2xl lg:text-3xl text-blue-950 my-4 font-DotGothic font-bold">AI Infrastructure Engineer</h1>
            <hr />
          </div>

          <div className=" px-10 h-[40%] w-[100%]  mt-3 flex gap-3">
            <div className="flex-1 h-full   font-DotGothic text-blue-950 rounded space-y-5 pt-6 ">

              <div>
                <h6 className="font-bold text-lg">Location</h6>
                <p>San Francisco</p>
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
            <p className="px-2 lg:px-10text-lg">
              Here at Spellbrush, we're passionate about making a good anime game.

              We also happen to be the world's leading generative AI studio — we're the team behind niji・journey.
              We are currently investigating how AI can be used to help human artists perform masterpieces in the most complex medium of our times: videogames.

              Our games are characterized by a no-compromise approach to well-balanced gameplay married to a truthful love of visual arts.
              If you love turn-based tactics games, please consider applying!
            </p></div>

          <div className="space-y-6.5 font-DotGothic ">
            <h2 className="text-2xl font-bold ">The Role:</h2>
            <p className="px-2 lg:px-10 text-lg ">Spellbrush, the world’s leading generative AI studio behind niji・journey,
                 is looking for an AI Infrastructure Engineer to join us in building out end-to-end ML infrastructure to run our models on all platforms.</p>
               
             
          </div>

           <div className="space-y-6.5 font-DotGothic ">
                        <h2 className="text-2xl font-bold">What you’ll do:</h2>
                        <ul className="space-y-6.5 px-2 lg:px-10 text-lg list-none list-inside ">
                            <li className="">
                            Design, implement and run our next-generation inference architecture
                             for running all our models powering all platforms and applications (mobile, web, etc.).
                            </li>
                            <li className="">
                              Work alongside a fast-paced and nimble team developing the latest state-of-the-art image generation models
                               serving over 16 million users
                            </li>
                           
                        </ul>



                    </div>
           <div className="space-y-9.5 font-DotGothic">
                        <h3 className="text-2xl font-bold " >You may be a good fit if:</h3>
                        <div className="px-2 lg:px-10space-y-10">
                            <ul className="space-y-9.5 px-4 lg:px-10  text-lg list-none list-inside ">
                              
                                <li className="  space-y-2.5">

                                    <span className=" font-bold">You have experience with large distributed systems</span>
                                    <span className="block">
                                    You have familiarity with the latest hotness like K8S, Kafka, NATS, Redis, etc. You’ve cut your teeth on both on-prem and multi-cloud clusters. But most importantly, you deeply understand the tradeoffs 
                                    and the failure mode of each system you introduce (and potentially even have the battle scars to prove it!).
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You have an excellent understanding of GPU’s handling large workloads</span>
                                    <span className="block">
                                   GPU workloads are different from traditional CPU workloads in very interesting ways. 
                                   Experience deploying, or even optimizing them end-to-end, is a huge plus for this role
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

                                    <span className="font-bold ">You're comfortable working on small, fast-paced teams</span>
                                    <span className="block">
                                  We currently have a small tight-knit team on AI. You'll be working closely alongside some of the best AI researchers in the world, on the literal best image model in the world.
We also believe in the unmatched speed of in-person teams, and prefer on-site collaboration in either our primary research office in Tokyo (downtown Akihabara), or San Francisco. Visa sponsorships are available.
                                    </span>
                                    
                                     
                                </li>
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You're excited about the potential of Generative AI</span>
                                    <span className="block">
                                  You'll also be working closely along some of the best AI researchers in the world. Part of working with our team may involve looking at our latest research results, and figuring out how to best apply it into the game. 
                                  You will be at the literal cutting edge of what is possible with machine learning, art, and games.
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

export default AiInfra
