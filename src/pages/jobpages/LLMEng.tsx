import { motion } from "motion/react"

import { useState, useRef, useEffect } from "react"
import LLMPrompter from "../../imgs/LLMPrompter.png"

const LLMEng = () => {
    const [read, setRead] = useState<boolean>(false)
    const scrollRef = useRef<HTMLDivElement>(null)



    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onScroll = () => {
            const progress = el.scrollTop
            if (progress > 300) {
                setRead(true)
            }
        };
        el.addEventListener('scroll', onScroll);

        return () => el.removeEventListener('scroll', onScroll);
    }, []);




    return (
        <div
            style={{ backgroundImage: `url(${LLMPrompter})` }}
            className="bg-[#E0F0F2] rounded h-full w-full text-yellow-950 font-DotGothic">
                
           <div className=" p-3 absolute top-0 lg:fixed lg:inset-22 lg:top-8 
      ring-1 ring-white/25  backdrop-blur-[65px] border  border-white/50 shadow-2xl overflow-y-auto lg:overflow-hidden h-[480vh]
       lg:h-auto shadow-black/10 bg-white/30 flex flex-col gap-4    lg:gap-0 lg:flex-row rounded ">

                 <div className="lg:w-[40%] w-full h-[800px] lg:h-full  lg:static z-5 flex flex-col bg-zinc-100/70   rounded lg:rounded-r-none items-center   ">
                    <div className="rounded h-[60%] p-2 "><img className="rounded h-[90%]" src={LLMPrompter} alt="" /><h1 className="text-3xl mb-4 mt-2 font-bold">LLM Engineer</h1>
                        <hr />
                    </div>

                    <div className=" px-10 h-[40%] w-[100%]  mt-3 flex gap-3">
                        <div className="flex-1 h-full rounded space-y-5 pt-4 ">

                            <div>
                                <h6 className="font-bold text-lg">Location</h6>
                                <p>San Francisco</p>
                            </div>

                            <div>
                                <h6 className="font-bold text-lg">Employement type</h6>
                                <p>Full time</p>
                            </div>

                            <div className="font-bold text-lg">
                                <h6>Department</h6>
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
                    <div className="space-y-3" >
                        <h3 className="text-2xl font-bold">About Us</h3>
                        <p className="px-2 lg:px-10 text-lg">
                            Here at Spellbrush, we're passionate about making a good anime game.

                            We also happen to be the world's leading generative AI studio — we're the team behind niji・journey.
                            We are currently investigating how AI can be used to help human artists perform masterpieces in the most complex medium of our times: videogames.

                            Our games are characterized by a no-compromise approach to well-balanced gameplay married to a truthful love of visual arts.
                            If you love turn-based tactics games, please consider applying!
                        </p></div>

                    <div className="space-y-3.5">
                        <h2 className="text-2xl font-bold">The Role:</h2>
                        <p className="px-2 lg:px-10 text-lg">Spellbrush, the world’s leading generative AI studio behind niji・journey, is looking for an LLM Prompt Engineer to bring the characters and world in our mobile turn-based tactics game to life with distinctive flair! If you love games like Fire Emblem and Final Fantasy
                            Tactics and are eager to utilize Generative AI to create evocative gameplay experiences, please apply!</p>
                    </div>

                    <div className="space-y-6.5 ">
                        <h2 className="text-2xl font-bold">What you’ll do:</h2>
                        <ul className="space-y-6.5 px-2 lg:px-10 text-lg list-none list-inside ">
                            <li className="">
                                Become the power user and wizarding wordsmith of our LLM models, coaxing out new turns of phrase, emotional responses,
                                and vivid imagery through imaginative prompt engineering.
                            </li>
                            <li className="">
                                Deeply understand our next flagship game’s core narrative, themes, and character motivations and conflicts – then translate
                                these elements into elegant LLM prompts.
                            </li>
                            <li className="">
                                Work with our Creative Director to develop new systems for enabling our game’s characters to freely express themselves in the native game
                                platforms where they interact with players.
                            </li>
                            <li className="">
                                NOTE: You do not need to be currently involved in LLM research or an AI / ML expert to apply -
                                we highly value your writing and creative ability.
                            </li>
                        </ul>



                    </div>
                    <div className="space-y-6.5">
                        <h3 className="text-2xl font-bold" >You may be a good fit if:</h3>
                        <div className="px-2 lg:px-10 space-y-10">
                            <ul className="space-y-9.5  px-4 lg:px-10  text-lg list-none list-inside ">
                              
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You endeavor to use LLM’s to revolutionize character communications.</span>
                                    <span className="block">
                                      A familiarity with text-based Generative AI and LLM is definitely handy, but moreso than that you understand that LLM’s are working off of datasets and training,
                                    and that your finesse in guiding the models will produce outstanding delights of diction.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You’re eager to push the boundaries of written and verbal communications.</span>
                                    <span className="block">
                                     Part of the challenge (and excitement) of using LLM’s is that they can produce combinations of words and phrases
                                    to produce meanings, mental images, and interactions never before imagined.
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">You understand what it means to be human, and how our human tendencies emerge in conversation.</span>
                                    <span className="block">
                                      To make authentic and genuine conversations, we believe the author (or in this case, prompter), should have a deep familiarity with the nuances that make language feel more “human”. 
                                    Whatever your mode of introspection and emotional exploration, we’d love to know (and support it)!
                                    </span>
                                    
                                     
                                </li>  
                                <li className="  space-y-2.5">

                                    <span className="font-bold ">And you're excited about the potential of Generative AI.</span>
                                    <span className="block">
                                    You'll also be working closely with some of the best AI researchers in the world. Part of working with our team will involve looking at our latest research results and figuring out how to apply them to the game best.
                                     You will be at the cutting edge of what is possible with machine learning, art, and games.
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

export default LLMEng
