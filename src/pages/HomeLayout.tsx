import GrowNav from "../Components/GrowNav"
import { Outlet, useLocation } from "react-router-dom"
import { createContext,  useState, useEffect } from "react";
import JobList from "./JobList";
import logo from "../imgs/logo.png"
import { Loader } from "@react-three/drei";

 type jobContextType = {
    showCards : boolean,
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>,
    flipped : {[id:string] : boolean},
    setFlipped :  React.Dispatch<React.SetStateAction<{[id: string]: boolean }>>,
    introDone: boolean,
    setIntroDone : React.Dispatch<React.SetStateAction<boolean>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }

 export const jobContext   = createContext<jobContextType |null>(null)


const HomeLayout = () => {

 const[showCards, setShowCards] = useState<boolean>(false)
 const [flipped , setFlipped] = useState<{[id:string]: boolean}>({})
 const [introDone, setIntroDone] = useState<boolean>(false)
 const [loading , setLoading] = useState<boolean>(true)
 useEffect(() => {
  console.log('this is in home', flipped);
}, [flipped]);

 const location =  useLocation()

 useEffect(()=>{
   if(location.pathname !== "/"){
  setIntroDone(true)
  setLoading(false)
 }
 }, [location])
 
useEffect(() => {


  if (showCards ) {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    
  }

  return () => {
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto"; 
  };
}, [showCards]);


  return (
    <>
    { loading && <Loader/>}
     <jobContext.Provider value={{ showCards , setShowCards , flipped , setFlipped , introDone , setIntroDone , loading , setLoading}}>
      
      <JobList/>
    <div 
   
    className="bg-[url('/imgs/base2.jpg')] bg-cover bg-center h-screen w-full bg-zinc-100 flex-col  ">
      
      <div className="Main-sec relative z-40 border w-full flex justify-center h-full">
        <Outlet/>
      </div>

      <div 
      className="footer fixed bottom-0  h-[10%] px-6  w-screen z-50  flex justify-between transition-all duration-250">

        {!showCards && <a href="/" className="w-[50px] "><img src={logo} className="" alt="spell brush logo" /></a> } 
       <div className="mr-35 ">{!showCards && introDone  && <GrowNav title="Explore jobs" />}</div>
        
      </div>

    </div>
     </jobContext.Provider>
     
     </>
  )
}

export default HomeLayout
