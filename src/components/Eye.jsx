import React from 'react'

function Eye() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className="w-full h-full relative bg-cover bg-center bg-[url('/eyetop.jpg')]">
        <div className="absolute flex gap-4 md:gap-8 lg:gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full">
                    <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
            <div className="w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full">
                    <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eye
