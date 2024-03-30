import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-8'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3  mt-4'>{overview}</p>
      <div className='flex mt-8'>
        <button className='flex item-center px-3 py-2 bg-white text-black rounded-md hover:bg-opacity-15'>
        <CiPlay1 size="24px" />
          <span>Play</span>
          </button>
        <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50  text-black rounded-md'>
        <CiCircleInfo size="24px" />
          Watch more
          </button>
      </div>
        
    </div>
  )
}

export default VideoTitle
