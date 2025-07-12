import { motion } from "framer-motion";

const AnimatedWord = ({ text }: { text: string }) => {
   const number =  Math.floor(Math.random()*4) + 1
  return (
    <div className="flex space-x-1">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -8, 0, 8, 0], // up-down loop
            rotate: [0, -5, 0, 5, 0], // slight wiggle
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: i==number ? i * 0.15 : i*0.40 // stagger each letter
          }}
          className="text-4xl font-bold inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};


export default AnimatedWord