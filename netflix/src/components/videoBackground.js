import React from 'react'
import UseMoviesById from '../hooks/useMoviesById'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  const  trailermovie = useSelector((store)=>store.movie.trailermovie)
  

  UseMoviesById(movieId)

  // const key="5fv9UdRC8eg"
  return (
    // const key="5fv9UdRC8eg"

    <div className='w-screen aspect-video'>
      <iframe
      className='w-screen aspect-video p-0 m-0'
       width="60" height="615" src={`https://www.youtube.com/embed/${trailermovie?.key}?si=Q-jVcHwbuvsM3l4F&autoplay=1&mute=1`} 
       title="YouTube video player" 
       frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground

