import React from 'react'

function Featured() {
  return (
    <div className="w-full py-20 bg-[#F1F1F1]">
        <div className="w-full px-14 border-b-[1px] pb-20 border-zinc-500">
            <h1 className="font-['Neue Montreal'] text-6xl tracking-tight">Featured projects</h1>
        </div>
        <div className="px-14">
        <div className="cards w-full flex gap-4 mt-10">
            <div className="cardcontainer w-1/2 h-[80vh]">
                <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className="cardcontainer w-1/2 h-[80vh]">
                <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Featured
