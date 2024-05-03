import React from 'react'

function Box(props) {
  return (
    <>
        <div onClick={props.onClick} className='flex justify-center items-center h-full w-[33%] border-2 border-black font-bold text-[75px]'>
            {props.value}
        </div>
    </>
  )
}

export default Box