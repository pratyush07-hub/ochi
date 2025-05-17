import React from 'react'

function Featured() {
  return (
    <div className="w-full py-10 md:py-16 lg:py-20 bg-[#F1F1F1]">
        <div className="w-full px-4 md:px-8 lg:px-14 border-b-[1px] pb-10 md:pb-16 lg:pb-20 border-zinc-500">
            <h1 className="font-['Neue Montreal'] text-4xl md:text-5xl lg:text-6xl tracking-tight">Featured projects</h1>
        </div>
        <div className="px-4 md:px-8 lg:px-14">
            <div className="cards w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10">
                <div className="cardcontainer w-full md:w-1/2 h-[50vh] md:h-[70vh] lg:h-[80vh]">
                    <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="Fyde Illustration" />
                    </div>
                </div>
                <div className="cardcontainer w-full md:w-1/2 h-[50vh] md:h-[70vh] lg:h-[80vh]">
                    <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Vise Front" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
