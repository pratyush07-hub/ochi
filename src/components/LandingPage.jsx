import { motion } from 'motion/react';
import React from 'react'  // rfce
import { FaArrowUpLong }from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-16">
        <div className="masker uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-bold font-['Founders Grotesk']">
            <h1>WE CREATE</h1>
        </div>
        <div className="masker uppercase text-[7.5vw] leading-none tracking-tighter font-bold font-['Founders Grotesk'] flex">
            <motion.div
             initial={{width:0}}
             animate={{width: "9vw"}}
             transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
             className="mr-[0.5vw] rounded w-[9vw] h-[5.7vw] bg-green-500 relative top-[1.2vw]"></motion.div>
            <h1>eye-opening</h1>
        </div>
        <div className="masker uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-bold font-['Founders Grotesk']">
            <h1>presentations</h1>
        </div>
      </div>
        <div className="border-t-[1px] mt-28 border-zinc-500 flex justify-between item-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index) => <p className="text-md font-regular tracking-tight leading-none">
            {item}</p>)}
            <div className="start flex items-center mt-[-0.5vw] gap-2">
                <div className="px-5 py-1 border-[1px] border-zinc-900 rounded-full font-lighter uppercase"> start the project</div>
                <div className="w-8 h-8 rounded-full border-[1px] border-zinc-900 flex items-center justify-center">
                    <span className="rotate-[45deg]">
                    <FaArrowUpLong />
                    </span></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
