import React from 'react'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector(store =>store.movie?.nowPlayingmovies)
  if (!movie) return;
  console.log(movie)
  const {overview,id,title}=movie[4]


  return (
    <div>
        <VideoTitle  title={title}  overview={overview}/>
        <VideoBackground  movieId={id}/>
      
    </div>
  )
}

export default MainContainer


