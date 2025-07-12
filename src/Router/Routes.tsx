import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import Frontend from "../pages/jobpages/Frontend";
import GameProgrammer from "../pages/jobpages/GameProgrammer";
import LLMEng from "../pages/jobpages/LLMEng";
import AiInfra from "../pages/jobpages/AiInfra";
import AiResearch from "../pages/jobpages/AiResearch";


 const Router = createBrowserRouter([
    {path:'/', element: <HomeLayout/> , children: [
        {path:"" , element : <AboutUs/>},
        {path:"frontend" , element : <Frontend/>},
        {path:"llm-eng" , element: <LLMEng/>},
        {path:"Ai-infra" , element: <AiInfra/>},
        {path:'game-programmer' , element : <GameProgrammer/>},
        {path:'Ai-research' , element : <AiResearch/>},
    ]},
    {path: "*" , element: <NotFound/>}
])




export default Router