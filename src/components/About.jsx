import React from 'react'

function About() {
  return (
    <div className="w-full p-4 md:p-10 lg:p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl">
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] tracking-tight leading-[7vw] md:leading-[6vw] lg:leading-[5vw] font-['Neue Montreal']">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds, sell prod­ucts, ex­plain com­plex ideas,</span> and <span className="underline">hire great peo­ple</span>.
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] mt-10 md:mt-16 lg:mt-20 border-[#a1b562]">
            <div className="w-full md:w-1/2 font-['Neue Montreal']">
                <h1 className="text-[5vw] md:text-[4vw] lg:text-[3vw]">Our approach:</h1>
                <button className="flex gap-4 md:gap-10 items-center px-4 md:px-6 py-3 md:py-5 mt-4 bg-zinc-900 rounded-full text-white tracking-tight text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] uppercase">
                    Read More
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl mt-5">
                <img className="w-full h-auto rounded-2xl" src="/Homepage.jpg" alt="Homepage" />
            </div>
        </div>
    </div>
  )
}

export default About
