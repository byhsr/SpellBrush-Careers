import { Typewriter } from 'react-simple-typewriter';

const HelloIntro = ({text}:{text:string}) => (
  <h1 className='text-xl font-Mochi text-[#F0555D] lg:text-zinc-700 ml-4'>
    <Typewriter
      words={[text]}
      loop={1}            
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={0}     
      delaySpeed={1000}   
    />
  </h1>
);


export default HelloIntro