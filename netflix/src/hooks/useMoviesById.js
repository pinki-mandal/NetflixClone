// import React from 'react'
import axios from 'axios'
import { options } from '../utils/constent'
import { useDispatch } from 'react-redux'
import { getTrailermovies } from '../redux/movieSlice'

const UseMoviesById = async(movieId) => {
    const dispatch = useDispatch()
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
    console.log(res.data.results)
    // console.log(res.data.results)

    const trailer=res?.data?.results?.filter((item)=>{
        return item.type === "Trailer";
    })
    dispatch(getTrailermovies(trailer.length > 0 ? trailer[0] : res.data.results[0]))

    



    
  } catch (error) {
    console.log(error)
    
  }
}

export default UseMoviesById


