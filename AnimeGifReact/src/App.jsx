import { useState } from 'react'
import Home from './components/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-auto min-h-screen bg-[#31363F] flex justify-start items-center flex-wrap flex-col'>
        <h1 className='text-white text-[40px] w-full text-center h-[20%] bg-[#222831] font-bold'>
          Anime Gifs
        </h1>
        <div className='flex w-full justify-center items-center flex-col text-white h-auto min-h-[80%]'>
            <Home/>
        </div>  
      </div>
    </>
  )
}

export default App
