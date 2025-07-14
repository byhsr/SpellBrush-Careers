import { motion} from "motion/react"

import { useState, useRef, useEffect } from "react"
import forntEnd from "../../imgs/frontend-eng1.png"

const Frontend = () => {
  const [read, setRead] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)



 useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const onScroll = () => {
    const progress = el.scrollTop    
    if(progress>190){
      setRead(true)
    }
  };
  el.addEventListener('scroll', onScroll);

  return () => el.removeEventListener('scroll', onScroll);
}, []);




  return (
    <div 
    style={{backgroundImage : `URL(${forntEnd})`}}
    
    className="bg-[#E0F0F2] rounded h-full w-full ">


      <div className=" p-3 absolute top-0 lg:fixed lg:inset-22 lg:top-8 
      ring-1 ring-white/25  backdrop-blur-[65px] border  border-white/50 shadow-2xl overflow-y-auto lg:overflow-hidden h-[300vh]
       lg:h-auto shadow-black/10 bg-white/30 flex flex-col gap-4 lg:gap-0 lg:flex-row rounded ">

        <div className="lg:w-[40%] w-full h-[1000px] lg:h-full  lg:static z-5 flex flex-col bg-zinc-100/70   rounded lg:rounded-r-none items-center font-DotGothic  ">
          
          <div className="rounded h-[60%] p-2 "><img className="rounded bg-center h-[90%]" src={forntEnd} alt="" /><h1 className="text-2xl lg:text-3xl my-4 ">Front-End Engineer</h1>
            <hr />
          </div>

          <div className=" px-10 h-[40%] w-[100%]  mt-5 flex gap-3">
            <div className="flex-1 h-full bg-red rounded space-y-5 pt-4 ">

              <div>
                <h6 className="font-bold text-lg">Location</h6>
                <p>San Francisco, Remote</p>
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
                <h6 className="font-bold text-lg">Skills</h6>
                <p>Typescript , React</p>
              </div>
              {/* ${read? 'lg:opacity-1' : 'lg:opacity-0'}  */}
              {/* {`rounded-3xl bg-[#F0555D] z-20 opacity-1 px-7 py-2 text-white`} */}
                <div className="self-end ">
                  <button className={`text-black bg-[#F0555D] px-7 py-2 rounded-3xl  ${read? 'lg:block' : 'lg:hidden'} ` }>Apply now</button>
                </div>


            </div>
          </div>
        </div>


{/* right */}
        <motion.div
        ref={scrollRef}
        className=" w-full lg:w-[60%] relative h-full  bg-zinc-100/70 font-DotGothic rounded rounded-l-none  overflow-y-auto  
        space-y-10 p-8 text-zinc-800">
          <div className="space-y-3" >
            <h3 className="text-2xl ">About Us</h3>
            <p className="px-10 text-sm">
              Here at Spellbrush, we're passionate about making a good anime game.

              We also happen to be the world's leading generative AI studio — we're the team behind niji・journey.
              We are currently investigating how AI can be used to help human artists perform masterpieces in the most complex medium of our times: videogames.

              Our games are characterized by a no-compromise approach to well-balanced gameplay married to a truthful love of visual arts.
              If you love turn-based tactics games, please consider applying!
            </p></div>

          <div className="space-y-3.5">
            <h2 className="text-2xl ">The Frontend Role:</h2>
            <p className="px-10 text-sm]">We're seeking a talented Front-End Engineer to join our team and help us build the next generation of anime and video game tools. You'll be responsible for
              designing and developing complex front-end applications, usually in react and typescript, with a focus on making responsive and delightful user interfaces.</p>
          </div>
          <div className="space-y-6.5">
            <h3 className="text-2xl" >You may be a good fit if:</h3>
            <div className="px-10 space-y-10">
              <div className="space-y-1">
                <h6 className="">You love anime and the anime aesthetic</h6>
                <p className="">As a member of our team, you'll have the opportunity to push the boundaries of what's possible in the anime and video game industry. Ideally you're a fan of the genre.         </p>
              </div>

              <div className="space-y-1">


                <h6 className="">You enjoy working on complex SPAs.</h6>
                <p className=""> Most of our apps are interaction-heavy single-page editors, much closer in spirit to photoshop and blender than your typical SaaS app. A willingness to dive headfirst into canvas, webGL, and (maybe!) webGPU is recommended!</p>
              </div>

              <div className="space-y-1">
                <h6>you also have some design sense.</h6>
                <p className="">Large complex SPAs have all sorts of super interesting UI/UX challenges! We're looking for someone with experience building tasteful UI, a good design sense for layout, experiences, and microinteractions.
                </p>
              </div>

              <div className="space-y-1">
                <h6>You're comfortable working on small, fast-paced teams</h6>
                <p className="">
                  We currently have a tiny team of three on frontend engineering. You'll be working directly with some of the best AI researchers in the world to integrate their state-of-the-art models into your beautiful interfaces.

                  We also believe in the unmatched speed of in-person teams, and prefer on-site collaboration in either our primary research office in Tokyo (downtown Akihabara) or San Francisco. Visa sponsorships are available.</p>
              </div>
            </div>
          </div>
        </motion.div>





        {/* right */}


      </div>

    </div>
  )
}

export default Frontend
