import { motion} from "motion/react"

import { useState, useRef, useEffect } from "react"
import gameProgrammer from "../../imgs/game programmer.png"

const GameProgrammer = () => {
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
    style={{ backgroundImage: `url(${gameProgrammer})` }}
    className="bg-[#E0F0F2] bg-cover rounded h-full w-full">

        <div className=" p-3 absolute top-0 lg:fixed lg:inset-22 lg:top-8 
      ring-1 ring-white/25  backdrop-blur-[65px] border  border-white/50 shadow-2xl overflow-y-auto lg:overflow-hidden h-[380vh]
       lg:h-auto shadow-black/10 bg-white/30 flex flex-col gap-4 lg:gap-0 lg:flex-row rounded ">

        <div className="lg:w-[40%] w-full h-[1000px] lg:h-full  lg:static z-5 flex flex-col bg-zinc-100/70   rounded lg:rounded-r-none items-center font-DotGothic  ">
          <div className=" h-[60%] p-2 "><img className="rounded h-[90%]" src={gameProgrammer} alt="" /><h1 className="text-2xl lg:text-3xl text-blue-950 my-4 font-DotGothic font-bold">Game Programmer (Unity)</h1>
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
        space-y-10 p-8 text-blue-950">
          <div className="space-y-3 font-DotGothic" >
            <h3 className="text-2xl font-bold ">About Us</h3>
            <p className="px-2 lg:px-10 text-lg">
              Here at Spellbrush, we're passionate about making a good anime game.

              We also happen to be the world's leading generative AI studio — we're the team behind niji・journey.
              We are currently investigating how AI can be used to help human artists perform masterpieces in the most complex medium of our times: videogames.

              Our games are characterized by a no-compromise approach to well-balanced gameplay married to a truthful love of visual arts.
              If you love turn-based tactics games, please consider applying!
            </p></div>

          <div className="space-y-6.5 font-DotGothic ">
            <h2 className="text-2xl font-bold ">The Unity Engineer Role:</h2>
            <p className=" px-2 lg:px-10 text-lg ">We are looking for an experienced game engineer with strong C# and Unity skills.
               You will be working closely with a small, multidisciplinary team to build out our upcoming anime mobile tactics game.</p>
               
               <p className=" px-2 lg:px-10 text-lg">Our game programmers are mostly generalists, so you can work on lots of different areas of the game. It’s important that you take pride in your work and know what it means to take responsibility and deliver quality and fun to players.
                 You are comfortable taking a feature from a vague idea on a post-it to a fully working and polished implementation..</p>
          </div>
           <div className="space-y-9.5 font-DotGothic">
                        <h3 className="text-2xl font-bold " >You may be a good fit if:</h3>
                        <div className="px-1 lg:px-10  space-y-10">
                            <ul className="space-y-9.5 px-4 lg:px-10  text-lg list-none list-inside ">
                              
                                <li className="  space-y-2.5">

                                    <span className=" font-bold">You love Strategy RPGs</span>
                                    <span className="block">
                                    Our team draws tons of inspiration from titles like Fire Emblem, Final Fantasy Tactics, and X-Com. 
                                    Our next title aims to bring the best of this genre onto the mobile screen.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">And you also love the anime aesthetic</span>
                                    <span className="block">
                                    We're also huge anime fans if you haven't noticed.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You deeply understand Unity</span>
                                    <span className="block">
                                    We're looking for someone with 5+ years of programming experience and a high level of familiarity with Unity. A good candidate must have shipped at least one game with Unity (personal projects are great!) 
                                    and have built up a sixth sense for what is the "happy path" in modern Unity development.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You're comfortable working on small, fast-paced teams</span>
                                    <span className="block">
                                  Working here will feel very much like a small indie studio: close-knit, with high ownership and flexibility.
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

export default GameProgrammer
