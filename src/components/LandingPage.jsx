import { motion } from 'motion/react';
import React from 'react'  // rfce
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
      <div className="textstructure mt-32 md:mt-32 lg:mt-40 px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20">
        <div className="masker uppercase text-[12vw] md:text-[8vw] lg:text-[7.5vw] leading-[8vw] md:leading-[7vw] lg:leading-[6vw] tracking-tighter font-bold font-['Founders Grotesk']">
            <h1>WE CREATE</h1>
        </div>
        <div className="masker uppercase text-[12vw] md:text-[8vw] lg:text-[7.5vw] leading-none tracking-tighter font-bold font-['Founders Grotesk'] flex">
            <motion.div
             initial={{width: 0}}
             animate={{width: "9vw"}}
             transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
             className="mr-[0.5vw] rounded w-[9vw] h-[6vh] md:h-[5.2vw] overflow-hidden relative top-[2.4vw] md:top-[1.6vw]">
                <img className="w-full rounded h-auto" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>
            <h1>eye-opening</h1>
        </div>
        <div className="masker uppercase text-[12vw] md:text-[8vw] lg:text-[7.5vw] leading-[8vw] md:leading-[7vw] lg:leading-[6vw] tracking-tighter font-bold font-['Founders Grotesk']">
            <h1>presentations</h1>
        </div>
      </div>
        <div className="border-t-[1px] mt-48 md:mt-20 lg:mt-28 border-zinc-500 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-4 md:px-8 lg:px-20 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row gap-8 md:gap-8">
                {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
                    <p key={index} className="text-sm md:text-md font-regular tracking-tight leading-none">
                        {item}
                    </p>
                ))}
            </div>
            <div className="start flex items-center gap-2 mt-4 md:mt-0">
                <div className="px-4 md:px-5 py-1 border-[1px] border-zinc-900 rounded-full font-lighter uppercase text-sm md:text-base">start the project</div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-[1px] border-zinc-900 flex items-center justify-center">
                    <span className="rotate-[45deg]">
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
