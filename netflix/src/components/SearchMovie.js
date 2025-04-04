import React, { useState } from 'react'
import axios from 'axios'
import { Search_URL, options } from '../utils/constent'
import { useDispatch, useSelector } from 'react-redux'
import {setSearchDetailsMovies} from '../redux/searchSlice'
import { setLoading } from '../redux/userSlice'
import MovieList from './MovieList'

const SearchMovie = () => {
  const [searchMovie,setSearchMovie]=useState("")
  const dispatch=useDispatch()
  const isLoading = useSelector(store=>store.app.isLoading)
  const {movieName, searchedMovie} = useSelector(store => store.searchMovie);
  console.log(movieName)

// Render your component normally


  const Submithandle=async(e)=>{
    e.preventDefault()
    dispatch(setLoading(true))

    try {
      const res = await axios.get(`${Search_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options)
      console.log(res.data.results)
      const movies=res.data.results
      dispatch(setSearchDetailsMovies({searchMovie,movies}))
      // setSearchDetailsMovies
    } catch (error) {
      console.log(error)
      
    }finally{
      dispatch(setLoading(false))
    }
    setSearchMovie("")
    }
  return (
    <>
    <div className='flex justify-center pt-[10%] w-[100%]'>
       <form  onSubmit={Submithandle}  className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200  rounded-lg w-[100%]'>
        <input  value={searchMovie}   onChange={(e)=>setSearchMovie(e.target.value)}  className="w-full outline-none rounded-md text-lg"  type="text" placeholder='Search Movie...'></input>
        <button  className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading? "loading..":"Search"}</button>
        </div>
       </form>
       
      
    </div>
    <div>
       <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>
       </div>
    </>
  )
}

export default SearchMovie
