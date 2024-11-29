import { motion } from 'motion/react'
import React from 'react'  // rfce

function Markwa() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 text-zinc-100 overflow-hidden flex whitespace-nowrap">
        <motion.h1 initial={{x : 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[20vw] mb-[0vw] tracking-tighter pr-20 leading-none font-['Founders Grotesk'] uppercase font-bold">we are ochi</motion.h1>
        <motion.h1 initial={{x : 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[20vw] mb-[0vw] tracking-tighter pr-20 leading-none font-['Founders Grotesk'] uppercase font-bold">we are ochi</motion.h1>
        <motion.h1 initial={{x : 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[20vw] mb-[0vw] tracking-tighter pr-20 leading-none font-['Founders Grotesk'] uppercase font-bold">we are ochi</motion.h1>
      </div>
    </div>
  )
}
export default Markwa
