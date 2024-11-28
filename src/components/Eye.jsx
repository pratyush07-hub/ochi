import React from 'react'

function Eye() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className="w-full h-full relative bg-cover bg-center bg-[url('/eyetop.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full">
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
                <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className="w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full">
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eye
