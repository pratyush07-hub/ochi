import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl ">
        <h1 className=" text-[4vw] tracking-tight leading-[5vw] font-['Neue Montreal']">Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds, sell prod­ucts, ex­plain com­plex ideas,</span> and <span className="underline">hire great peo­ple</span>.</h1>
        <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562]">
            <div className="w-1/2 font-['Neue Montreal']">
                <h1 className="text-[3vw]">Our approach:</h1>
                <button className="flex gap-10 items-center px-6 py-5 mt-4 bg-zinc-900 rounded-full text-white tracking-tight text-[1.2vw] uppercase">Read More
                    <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 relative overflow-hidden rounded-2xl mt-5"><img className="w-full h-auto rounded-2xl" src="/Homepage.jpg" alt="Homepage" /></div>
        </div>

    </div>
  )
}

export default About
