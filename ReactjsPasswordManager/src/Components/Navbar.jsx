import React from 'react'

function Navbar() {
  return (
    <>
        <nav>
        <div className='flex justify-center items-center p-4 w-screen h-[8vh]  font-bold text-xl  flex-col bg-[#1e1e24]  text-white'>
            <div >
            &lt;
                <span > Password 🔒</span>
                <span className='text-green-400'> Manager </span>
            &gt;	
            </div>
            </div>  
        </nav>
    </>
  )
}

export default Navbar