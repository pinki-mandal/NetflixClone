import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,searchMovie=false}) => {
   
  return (
    <div>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl PY-3 ml-2 z-10`}>{title}</h1>

        <div className='flex overflow-x-auto   no-scrollbar  cursor-pointer'>
        <div className='flex items-center'>
        
{/*             
        {
            movies.map((movie)=>{
                return (
                    <MovieCard key={movie.id}/>

                )

                })
        }
      */}
      {
    movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie.id}  poster={movie.poster_path}/>
    ))
}

      


        
          
        </div>
        </div>
      
    </div>
  )
}

export default MovieList
