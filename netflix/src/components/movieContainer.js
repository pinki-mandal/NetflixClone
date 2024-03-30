import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
// import { Popolarmovies } from '../utils/constent'


const MovieContainer = () => {
  const movie = useSelector(store =>store.movie)
 
  return (
    <div className='bg-black '>
      <div className='-mt-56 relative z-10'>
      
      <MovieList title={"Popural movies"} movies={movie.popularmovie}/>
      <MovieList title={"Now playing  movies"} movies={movie.nowPlayingmovies}/>
      
     
     
      <MovieList title={"Top rated  movies"} movies={movie.topratedmovies}/>
      <MovieList title={"UpComing movies"} movies={movie.upcoming}/>

      </div>
      
      
    </div>
  )
}

export default MovieContainer
